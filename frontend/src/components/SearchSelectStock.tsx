import * as React from "react"
import { Check, Search} from "lucide-react"
import * as tickers from "../lib/ticker_names.json"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useStock } from "@/hooks/useStock"

export default function SearchSelectStock() {
    const {stock: value, setStock: setValue} = useStock();
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="border-my-gray" asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
                >
                {value
                    ? tickers.find((ticker) => ticker.symbol === value)?.symbol
                    : "Search ticker..."}
                <Search className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                <CommandInput placeholder="Search ticker..." />
                <CommandList>
                    <CommandEmpty>No ticker found.</CommandEmpty>
                    <CommandGroup>
                    {tickers.map((ticker) => (
                        <CommandItem
                        key={ticker.symbol}
                        value={ticker.symbol}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        {ticker.symbol}
                        <Check
                            className={cn(
                            "ml-auto",
                            value === ticker.symbol ? "opacity-100" : "opacity-0"
                            )}
                        />
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}