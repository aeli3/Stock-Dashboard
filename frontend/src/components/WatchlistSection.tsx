import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StockIcon from "../app/icons/StockIcon";
import { PlusIcon } from "lucide-react";

const watchlistStocks = [
    {
        ticker: "SPOT",
        name:"spotify",
        price: 310.40,
        change: -1.10
    },
    {
        ticker: "ABNB",
        name:"Airbnb",
        price: 132.72,
        change: -10.29
    },
    {
        ticker: "SHOP",
        name:"Shopify",
        price: 28.57,
        change: -6.48
    },
    {
        ticker: "BABA",
        name:"Ali Baba",
        price: 89.44,
        change: 1.22,
    },
    {
        ticker: "META",
        name:"META",
        price: 610.32,
        change: 2.10
    },
]

export default function WatchlistSection() {
    return(
        <div className="flex flex-col w-full h-full">
            <Card className="flex-1 border-none shadow-none">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle>
                       <span>My Watchlist</span>
                    </CardTitle>
                    <PlusIcon className="cursor-pointer" />
                </CardHeader>
                <CardContent>
                    {
                        watchlistStocks.map(stock => (
                            <Card className="rounded-none border-t-0 border-l-0 border-r-0 shadow-none first:pt-0 pt-4" key={stock.ticker}>
                                <CardContent>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row items-center space-x-4">
                                            <StockIcon className="w-10 h-10" ticker={stock.ticker} />
                                            <div className="flex flex-col">
                                                <span>{ stock.ticker }</span>
                                                <span className="text-my-gray font-[300]">{ stock.name }</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end min-w-16">
                                            <span>{ stock.price }</span>
                                            <span className={(stock.change < 0 ? "text-my-red" : "text-my-green")}>{ stock.change }%</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </CardContent>
            </Card>
        </div>
    )
}