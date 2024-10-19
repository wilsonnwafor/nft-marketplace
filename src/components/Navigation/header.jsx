import { Input } from "@/components/ui/input";
import { FaSearch,FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useState,useEffect } from "react";
import Web3 from 'web3';
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
// import { color } from '@coinbase/onchainkit/theme';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Set up web3 instance with MetaMask's provider
        const web3 = new Web3(window.ethereum);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts) {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const disconnectWallet = () => {
    setAccount(null);
    console.log("Wallet disconnected");
  };

  const handleClick =()=>{
    if(!menu){
      setMenu(true)
    }else{
      setMenu(false)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center gap-2 md:gap-8 w-full h-[4rem] border-b border-gray-500 fixed top-0 z-50 bg-[#303030]">
        <div className="flex items-center justify-center gap-1 md:gap-4 border-r border-gray-500 pr-8">
          <svg width="49" height="48" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 28C18.3261 28 19.5979 27.4732 20.5355 26.5355C21.4732 25.5979 22 24.3261 22 23C22 21.6739 21.4732 20.4021 20.5355 19.4645C19.5979 18.5268 18.3261 18 17 18C15.6739 18 14.4021 18.5268 13.4645 19.4645C12.5268 20.4021 12 21.6739 12 23C12 24.3261 12.5268 25.5979 13.4645 26.5355C14.4021 27.4732 15.6739 28 17 28ZM24.5 0.5L48.25 14.25V41.75L24.5 55.5L0.75 41.75V14.25L24.5 0.5ZM5.75 17.1325V38.8675L11.68 42.3L31.8625 27.5L43.25 34.335V17.135L24.5 6.275L5.75 17.1325Z" fill="#F4F4F9"/>
          </svg>
          <p className="text-xl md:text-3xl font-semibold text-white hidden md:block">NIFTOPIA</p>
        </div>
        <div className={`lg:flex gap-3 ${menu ? " bg-slate-400 w-full h-[50vh] absolute top-0 px-16 py-8 flex flex-col gap-8 z-50" : "hidden"}`}>
          <div className={`flex items-center border border-gray-500 ${menu ? "bg-white": ""} px-4 rounded-3xl`}>
            <FaSearch className="text-gray-500"/>
            <Input className="text-gray-500 border-0 bg-transparent ring-0 focus-visible:ring-offset-0 focus-visible:ring-0" type="text" placeholder="Search..."/>
          </div>
          <ul className={`lg:flex md:gap-3 text-white grid place-items-center`}>
            <li><Link to="/nft-marketplace" onClick={handleClick}>Home</Link></li>
            <li><Link to="/nft-marketplace/about" onClick={handleClick}>About</Link></li>
            <li><Link to="/nft-marketplace/discover" onClick={handleClick}>Discover</Link></li>
            {/* <li><Link to="/login">Login</Link></li>  */}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {account? 
          (<div className="flex gap-4 items-center">
            <p className="text-green-500">Wallet Connected</p>
            <Button onClick={disconnectWallet} className="px-2 py-2 bg-red-500 text-white rounded-lg">
              Disconnect Wallet
            </Button>
          </div>
          ):
          (
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
          )}
          
        </div>
        <FaBars className="text-white text-2xl lg:hidden absolute right-4 cursor-pointer z-50" onClick={handleClick} />
      </div>
    </>
  )
}

export default Header