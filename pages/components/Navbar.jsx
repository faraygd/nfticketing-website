import React from 'react'
import Link from 'next/link';
import { useMetamask, useAddress } from '@thirdweb-dev/react';
const Navbar = (metamaskWallet, address) => {
  return (
    <header className="h-20 py-12 flex items-center justify-between pr-20 pl-5 bg-slate-500">
      <div className="logo items-center flex ml-10">
        <div className="grid-cols-3">
          <h2 className="w-22 h-12 text-white">Ticketing NFT</h2>
          <p className="ml-3 text-white text-[10px]">
            Powered By
            <span className="text-white font-bold italic">Cherry Labs</span>
          </p>
        </div>
      </div>
      <nav className="mr-32">
        <ul className="text-white flex items-center space-x-6 font-bold text-md">
          <li>
            <Link
              href={{
                pathname: "/",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "#benefit",
              }}
            >
              Benefit
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "#about",
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar