import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';

interface StockQuote {
    Date: Date;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volume: number;
    Brand_Name: string;
    Ticker: string;
    Industry_Tag: string;
    Country: string;
    Dividends: number;
    Stock_Splits: number;
}

const fetchStockQuote = async (ticker: string, token: string): Promise<StockQuote[]> => {
  if (!ticker) {
    throw new Error('Ticker is required');
  }

  const response = await fetch(`http://localhost:3001/quote/${ticker}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const useFetchStockQuote = (ticker: string) => {
  const { token, isAuthenticated } = useAuth();

  return useQuery<StockQuote[], Error>({
    queryKey: ['stockQuote', ticker],
    queryFn: () => fetchStockQuote(ticker, token as string),
    enabled: !!ticker && isAuthenticated, // Only run the query if authenticated and ticker is truthy
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    refetchInterval: 5 * 60 * 1000, // Automatically refetch every 5 minutes
    retry: 2, // Retry failed requests twice
  });
};