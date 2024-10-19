import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import '@coinbase/onchainkit/styles.css';
import { useState } from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link, useNavigate } from 'react-router-dom';



const categories = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Art",
    label: "Art",
  },
  {
    value: "Gaming",
    label: "Gaming",
  },
  {
    value: "Photography",
    label: "Photography",
  },
]
const chains = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Ethereum",
    label: "Ethereum",
  },
  {
    value: "Solana",
    label: "Solana",
  },
  {
    value: "Base",
    label: "Base",
  },
  {
    value: "Polygon",
    label: "Polygon",
  },
]


const Discover = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const navigate = useNavigate();
  const data = [
    {
      "id": 1,
      "user": "johnny",
      "name": "yellow painting",
      "bid": 0.0014,
      "image": "./collection style.png"
    },
    {
      "id": 2,
      "user": "wilson",
      "name": "mask",
      "bid": 0.0016,
      "image": "./covermask.png"
    },
    {
      "id": 3,
      "user": "success",
      "name": "painting",
      "bid": 0.072,
      "image": "./Frame 3473960.png"
    },
    {
      "id": 4,
      "user": "lawson",
      "name": "acoustic",
      "bid": 0.1,
      "image": "./download (12).png"
    },
  ]

  const handleRowClick = (id) => {
    navigate(`/nft-marketplace/nft/${id}`); // Navigate to the specific NFT page
  };

  return (
    <div className="mt-16 md:px-8 px-2">
      {/* <Identity
        address="0x1AB850C0FFA3fe879B501fca9127f29d03464F46"
        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      >
        <Avatar />
        <Name>
          <Badge />
        </Name>
        <Address />
      </Identity>  */}
      <p className='py-8 text-4xl'>Collection Statistics</p>
      <div className='border-b border-gray-400 flex items-center gap-4 py-4'>
        <a className='text-xl' href="#">Trending</a>
        <a className='text-xl' href="#">Top</a>
      </div>
      <div className='text-black flex gap-8 py-4'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? categories.find((category) => category.value === value)?.label
                : "All Categories"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search categories..." />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      value={category.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === category.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open2}
              className="w-[200px] justify-between"
            >
              {value2
                ? chains.find((chain) => chain.value === value2)?.label
                : "All Chains"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search chains..." />
              <CommandList>
                <CommandEmpty>No chain found.</CommandEmpty>
                <CommandGroup>
                  {chains.map((chain) => (
                    <CommandItem
                      key={chain.value}
                      value={chain.value}
                      onSelect={(currentValue) => {
                        setValue2(currentValue === value2 ? "" : currentValue)
                        setOpen2(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value2 === chain.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {chain.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover> 
      </div>
      <Table className='w-full scroll-mx-0'>
        <TableHeader className='w-10/12'>
          <TableRow>
            <TableHead className="md:w-[100px]">#</TableHead>
            <TableHead className='w-fit'>Collection</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Change</TableHead>
            <TableHead className='text-nowrap'>Floor Price</TableHead>
            <TableHead className="md:text-right">Sales</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data ?
            data.map((nft, index) => (
              <TableRow key={nft.id} onClick={() => handleRowClick(nft.id)} className='cursor-pointer'>
                <TableCell className="font-medium">
                  {index + 1}
                </TableCell>
                <TableCell>
                <div className='flex items-center md:gap-6 gap-1 max-sm:w-[15px]'>
                  <img className='w-[3rem] rounded' src={`${nft.image}`} alt="" />
                  <p className='text-nowrap max-sm:text-xs'>{nft.name}</p>
                </div>
                </TableCell>
                <TableCell className="md:text-left"> - </TableCell>
                <TableCell className="md:text-left"> - </TableCell>
                <TableCell className="text-left max-sm:text-xs">{nft.bid} ETH</TableCell>
                <TableCell className="text-right max-sm:text-xs">$250.00</TableCell>
              </TableRow>
            )) : <p>No data available</p>
          }
        </TableBody>
      </Table>

    </div>
  )
}

export default Discover;


 
