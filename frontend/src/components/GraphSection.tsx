'use client'
import StockIcon from "@/app/icons/StockIcon";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState, useMemo } from "react";
import { useStock } from "@/hooks/useStock";
import { useFetchStockQuote } from "@/hooks/useFetchStockQuote";


export default function GraphSection() {
    const [hydrated, setHydrated] = useState(false)
    const { stock:selectedStock } = useStock()
    const { data, isSuccess, isError } = useFetchStockQuote(selectedStock);

    const processedData = useMemo(() => {
        if (isSuccess && data) {
            return data.map(item => ({
                ...item,
                // Convert Date to a format Recharts can easily parse
                Date: new Date(item.Date).toISOString().split('T')[0] // YYYY-MM-DD format
            }));
        }
        return [];
    }, [data, isSuccess]);

    useEffect(() => {
        setHydrated(true)
    }, [])
    
    return(
        <Card className="flex flex-col w-full h-full border-none shadow-none">
            {
                isSuccess
                ?
                <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-2">
                    <StockIcon className="w-12 h-12" ticker={data[0].Ticker}/>
                    <CardTitle className="flex flex-col text-2xl font-[400]">
                        <span>{data[0].Brand_Name}</span>
                        <span className="text-sm text-my-gray">{ data[0].Ticker }</span>
                    </CardTitle>
                </div>
                <div className="flex-1 flex flex-col items-end space-y-3">
                    <div className="flex flex-row space-x-3">
                        <div 
                        className={
                            "flex justify-center items-center rounded-2xl px-4 "
                            + (((data[0].Close - data[data.length - 1].Close) / 100) < 0 ? "bg-my-red" : "bg-my-green")
                        }
                        >
                            <span className="text-white">{((data[0].Close - data[data.length - 1].Close) / 100).toFixed(2) }%</span>
                        </div>
                        <span className="text-2xl">${ data[0].Close.toFixed(2) }</span>
                    </div>
                    <span className="text-my-gray text-sm">Last Update at 14:30</span>
                </div>
            </CardHeader>
            :
            null
            }
            <CardContent className="w-full h-full">
                {
                    hydrated && isSuccess
                    ?
                    <ResponsiveContainer width={"100%"} height={"100%"}>
                    <AreaChart 
                      width={730} 
                      height={250} 
                      data={processedData.toReversed()}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis dataKey="Date"/> 
                      <YAxis dataKey={"Close"}/>
                      <Tooltip />
                      <Legend />
                      <defs>
                        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="Close"
                        stroke="#82ca9d" 
                        fillOpacity={1} 
                        fill="url(#greenGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                    :
                    isError
                    ?
                    <span>Couldnt Load Stock from Db</span>
                    :
                    null
                }
            </CardContent>
        </Card>
    )
}