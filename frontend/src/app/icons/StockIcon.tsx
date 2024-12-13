interface stockIconProps {
    ticker: string
    className?: string | undefined
}

export default function StockIcon({ ticker, className }: stockIconProps ) {
    return (
        <img className={className == undefined ? "w-12 h-12" : className} 
        src={`https://assets.parqet.com/logos/symbol/${ticker}`} 
        />
    )
}