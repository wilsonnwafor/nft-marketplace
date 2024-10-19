import React from 'react'
import { Button } from '../ui/button';
import Discover from '@/pages/discover';

const Nft = () => {

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

  return (
    <>
      {
        data.map((item) => (
          <div className='p-2 rounded border border-gray-400 flex flex-col gap-2' key={item.id}>
            <div className=''>
              <img className='rounded-lg w-full h-full' src={`${item.image}`} alt="" />
            </div>
            <div className='flex items-center justify-between'>
              <p className='max-sm:text-xs text-nowrap'>@{item.user}</p>
              <p className='max-sm:text-xs text-nowrap'>Current Bid</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='max-sm:text-xs text-nowrap'>{item.name}</p>
              <p className='max-sm:text-xs text-nowrap'>{item.bid} ETH</p>
            </div>
            <Button className="w-full bg-transparent border border-gray-400 hover:bg-green-400">Place Order</Button>
          </div>
        ))
      }
    </>
  )
}

export default Nft;