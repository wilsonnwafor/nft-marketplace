import Nft from "@/components/nft/nft";
import { Button } from "@/components/ui/button";
import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownDisconnect, 
} from '@coinbase/onchainkit/wallet'; 
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';

const Home = () => {
  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-80% h-3/4 absolute lg:top-20 md:top-10">
          <img className="w-full h-full " src="./image 8.png" alt="" />
        </div>
        <div className="lg:w-6/12 md:w-8/12 w-11/12 h-2/4 backdrop-blur-[1px] bg-white/40 rounded-xl grid place-items-center p-8">
          <p className="text-4xl font-bold text-center">Your Gateway to Rare and Authentic NFTs</p>
          <p className="italic text-base text-center">Explore a curated collection of digital assets and start your NFT journey</p>
          <div className="flex items-center gap-4">
            <Button className="bg-green-500 rounded-3xl hover:bg-green-400 px-12">View NFT</Button>
            <Button className="text-green-500 bg-white rounded-3xl px-12">Sign Up</Button>
          </div>
        </div>
      </div>
      <div className="grid place-items-center w-11/12 mx-auto gap-4 my-2">
        <h1 className="text-4xl font-semibold">Top Collections</h1>
        <p className="text-lg mb-2 text-center">The Largest and Unique Super rare NFT Marketplace for crypto-collectibles</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"> 
          <Nft />
        </div>
      </div>
      <div className="h-auto w-11/12 mx-auto my-8 mb-16">
        <p className="text-4xl font-semibold text-center">Connect Wallet</p>
        <p className="text-lg text-center mb-8">support for wallets like Metamask, Coinbase wallet , etc.</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-10"> 
          <div className="w-2/4 grid place-items-center gap-2 border border-gray-400 py-4 rounded-lg shadow-lg shadow-white">
            <img src="/Vector.png" alt="" />
            <p className="border-b border-gray-400">Connect to Hackathon</p>
            <div className="flex justify-end text-white">
              <Wallet>
                <ConnectWallet className='bg-green-500 rounded-3xl hover:bg-green-400'>
                  <Avatar className="h-6 w-6" />
                  <Name />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2 hidden" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address className='text-white'/>
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div className="md:h-[15rem] h-[12rem] md:w-8/12 w-11/12 relative">
            <img className="absolute left-0 w-full scale-110" src="/Rectangle 18225.png" alt="" />
            <div className="flex justify-between items-center p-4 backdrop-blur-[1px] bg-white/40 rounded-xl w-full h-full">
            <div className="w-2/4 h-full flex flex-col items-start justify-around">
              <img src="./Vector2.png" alt="" />
              <p className="text-nowrap">1234 5678 9123 4567</p>
              <p>10/24</p>
              <p className="text-nowrap">Obumneme w. Nwafor</p>
            </div>
            <div className="w-2/4 h-full flex flex-col items-end justify-between">
              <img src="./Vector.png" alt="" />
              <img src="./Vector3.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-4 place-items-center pt-12">
        <div className="grid grid-cols-2 px-4">
          <img className="w-[15rem]" src="./download (7).png" alt="" />
          <img className="w-[15rem]" src="./download (14).png" alt="" />
          <img className="w-[15rem]" src="./download (16).png" alt="" />
          <img className="w-[15rem]" src="./download (15).png" alt="" />
        </div>
        <div className="grid grid-cols-1 place-items-end md:px-16 px-4">
          <p className="text-4xl font-semibold mb-5">ABOUT US</p>
          <p className="text-right">At Niftopia, we make it easy for collectors new to crypto to own NFTs in just a few clicks. Our platform simplifies the process, allowing you to explore, purchase, and securely store digital assets without needing any prior experience in cryptocurrency. Whether you're hunting for rare finds or starting your NFT collection, Niftopia makes the journey effortless and rewarding.</p>
          <p className="mt-5 text-right">Join us in exploring the world of NFTs, where creativity and innovation are at the core of every interaction.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
