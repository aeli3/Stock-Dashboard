"use client"
import SearchSelectStock from "@/components/SearchSelectStock";
import PortfolioSection from "@/components/PortfolioSection";
import WatchlistSection from "../components/WatchlistSection";
import GraphSection from "@/components/GraphSection";
import { Bell, ChevronDown, Minus } from "lucide-react";
import { StockProvider } from "@/context/StockContext";

export default function Home() {

  return (
    <StockProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex flex-row items-center justify-between bg-white w-full py-4 px-8">
          <SearchSelectStock />
          <div className="flex flex-row space-x-2">
            <Bell />
            <Minus className="rotate-90"/>
            <span>Ali Aarbaj</span>
            <ChevronDown />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[auto_1fr_1fr] lg:grid-rows-[auto_1fr] gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-1 rounded-xl overflow-auto">
            <PortfolioSection />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-start-2 lg:row-start-2 overflow-auto">
            <GraphSection />
          </div>
          <div className="col-span-1 row-start-3 lg:row-start-2 overflow-hidden">
            <WatchlistSection />
          </div>
        </div>
      </div>
    </StockProvider>
  );
}
