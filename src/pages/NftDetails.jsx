import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";


const NftDetails = () => {
  const { id } = useParams();


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

  const nft = data.find((item) => item.id === Number(id));

  if (!nft) {
    return <p>NFT not found</p>;
  }
  return (
    <>
      <div className="mt-24 md:px-8">
        <div className="md:flex items-center w-10/12 mx-auto h-80">
          <div className="border border-gray-400 p-4 rounded-md md:h-80 w-10/12 md:w-2/6 mx-auto">
            <img className="h-full w-full rounded-md" src={`.${nft.image}`} alt={nft.name} />
          </div>
          <div className="h-full w-10/12 flex flex-col md:justify-end md:px-8 mx-auto">
            <div className="md:w-2/6 h-4/6 flex flex-col justify-between mx-auto w-11/12">
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <p>@{nft.user}</p>
                  <p>Current Bid</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>{nft.name} NFT</p>
                  <p>{nft.bid}ETH</p>
                </div>
              </div>
              <p className="text-[.79rem]">Sale ends November 16, 2024 at 7:55 AM </p>
              <div className="">
                <p className="text-xs text-gray-400">Current Price</p>
                <p className="text-3xl font-semibold">{nft.bid}ETH <span className="text-xs text-gray-400">$3.62</span></p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex items-center justify-center gap-6 my-4">
                <Button className='w-2/4 flex items-center justify-center bg-green-500 hover:bg-green-400'>
                  <p className="w-10/12">BUY NOW</p>
                  <div className="border-l border-white px-4">
                    <img src="../Icon.svg" alt="cart" />
                  </div>
                </Button>
                <Button className='w-2/4 flex items-center justify-center gap-6 bg-gray-600 hover:bg-gray-500 p-4'>
                  <img src="../offer.svg" alt="offer" />
                  MAKE OFFER
                </Button>
              </div>
              <p className="flex items-center gap-2 md:text-sm text-[.5rem]">
                <img src="../giver.svg" alt="giver" />
                Supports creator <span className="text-xs text-gray-400">This listing is paying the collection creator their suggested creator earnings.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NftDetails