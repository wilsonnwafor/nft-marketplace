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
        <div className={`lg:flex gap-3 ${menu ? " bg-slate-400 w-full h-screen absolute top-0 px-16 py-8 flex flex-col gap-8 z-50" : "hidden"}`}>
          <div className={`flex items-center border border-gray-500 ${menu ? "bg-white": ""} px-4 rounded-3xl`}>
            <FaSearch className="text-gray-500"/>
            <Input className="text-gray-500 border-0 bg-transparent ring-0 focus-visible:ring-offset-0 focus-visible:ring-0" type="text" placeholder="Search..."/>
          </div>
          <ul className={`lg:flex md:gap-3 text-white grid place-items-center`}>
            <li><Link to="/nft-marketplace">Home</Link></li>
            <li><Link to="/nft-marketplace/about">About</Link></li>
            <li><Link to="/nft-marketplace/discover">Discover</Link></li>
            {/* <li><Link to="/login">Login</Link></li>  */}
          </ul>
        </div>
        
        {/* <div>
          <Link to="/login">
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29999 20.8C6.43332 19.9334 7.69999 19.25 9.09999 18.75C10.5 18.25 11.9667 18 13.5 18C15.0333 18 16.5 18.25 17.9 18.75C19.3 19.25 20.5667 19.9334 21.7 20.8C22.4778 19.8889 23.0833 18.8556 23.5167 17.7C23.95 16.5445 24.1667 15.3111 24.1667 14C24.1667 11.0445 23.1278 8.5278 21.05 6.45002C18.9722 4.37224 16.4555 3.33335 13.5 3.33335C10.5444 3.33335 8.02777 4.37224 5.94999 6.45002C3.87221 8.5278 2.83332 11.0445 2.83332 14C2.83332 15.3111 3.04999 16.5445 3.48332 17.7C3.91666 18.8556 4.52221 19.8889 5.29999 20.8ZM13.5 15.3334C12.1889 15.3334 11.0833 14.8834 10.1833 13.9834C9.28332 13.0834 8.83332 11.9778 8.83332 10.6667C8.83332 9.35558 9.28332 8.25002 10.1833 7.35002C11.0833 6.45002 12.1889 6.00002 13.5 6.00002C14.8111 6.00002 15.9167 6.45002 16.8167 7.35002C17.7167 8.25002 18.1667 9.35558 18.1667 10.6667C18.1667 11.9778 17.7167 13.0834 16.8167 13.9834C15.9167 14.8834 14.8111 15.3334 13.5 15.3334ZM13.5 27.3334C11.6555 27.3334 9.92221 26.9834 8.29999 26.2834C6.67777 25.5834 5.26666 24.6334 4.06666 23.4334C2.86666 22.2334 1.91666 20.8222 1.21666 19.2C0.516656 17.5778 0.166656 15.8445 0.166656 14C0.166656 12.1556 0.516656 10.4222 1.21666 8.80002C1.91666 7.1778 2.86666 5.76669 4.06666 4.56669C5.26666 3.36669 6.67777 2.41669 8.29999 1.71669C9.92221 1.01669 11.6555 0.666687 13.5 0.666687C15.3444 0.666687 17.0778 1.01669 18.7 1.71669C20.3222 2.41669 21.7333 3.36669 22.9333 4.56669C24.1333 5.76669 25.0833 7.1778 25.7833 8.80002C26.4833 10.4222 26.8333 12.1556 26.8333 14C26.8333 15.8445 26.4833 17.5778 25.7833 19.2C25.0833 20.8222 24.1333 22.2334 22.9333 23.4334C21.7333 24.6334 20.3222 25.5834 18.7 26.2834C17.0778 26.9834 15.3444 27.3334 13.5 27.3334Z" fill="#F4F4F9"/>
            </svg>
          </Link>
        </div> */}
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