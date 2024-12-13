import StockIcon from "@/app/icons/StockIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioSection() {
    const trendingTickers = [
        {
          ticker: "AAPL",
          name: "Apple",
          totalShares: 100,
          totalReturn: 40.21,
        },
        {
          ticker: "TSLA",
          name: "Tesla",
          totalShares: 64,
          totalReturn: 120.21,
        },
        {
          ticker: "NVDA",
          name: "Nvidia",
          totalShares: 123,
          totalReturn: -12.87,
        },
        {
          ticker: "GOOG",
          name: "GOOGLE",
          totalShares: 32,
          totalReturn: 300.01,
        },
        {
          ticker: "AMZN",
          name: "AMAZON",
          totalShares: 220.32,
          totalReturn: 450.01,
        },
    ]

    return(
        <div className="flex flex-row first:rounded-lg last:rounded-lg">
        {trendingTickers.map(stock => (
          <Card key={stock.ticker} className="rounded-none w-full border-none shadow-none">
            <CardHeader className="flex flex-row items-center space-x-2">
              <StockIcon className="w-8 h-8" ticker={ stock.ticker }/>
              <CardTitle>{ stock.name }</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-between">
                <span className="text-my-gray font-[300]">Total Shares</span>
                <span>{ stock.totalShares }</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-my-gray font-[300]">Total Return</span>
                <span className={(stock.totalReturn < 0 ? " text-my-red" : "text-my-green")}>${ stock.totalReturn }</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
}