import { NextFunction, Request, Response } from 'express';
import Stock from '../models/Stock';

// Route to fetch quotes by ticker
export const quote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ticker = req.params.ticker.toUpperCase();
    console.log(ticker)

    // Validate ticker simply
    if (!/^[A-Z]+$/.test(ticker)) {
      return res.status(400).json({ error: 'Invalid ticker format' });
    }

    // Fetch documents from MongoDB
    const quotes = await Stock.find({ Ticker: ticker }).sort({ Date: -1 }).limit(100);
    console.log(`Found ${quotes.length} quotes for ticker ${ticker}`);

    if (quotes.length === 0) {
      return res.status(404).json({ message: 'No quotes found for this ticker' });
    }

    res.json(quotes);

  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};