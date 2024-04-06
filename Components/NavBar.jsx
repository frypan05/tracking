import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding"; // Adjust import path
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext); // Destructure connectWallet from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["White Paper", "Project", "Donation", "Members"];

  const handleConnectWallet = async () => {
    try {
      // Request user to connect their wallet using MetaMask
      await connectWallet();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-white" /> 
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span>
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our Product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={handleConnectWallet} // Call handleConnectWallet function
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Connect Wallet" // Update aria-label and title
                  title="Connect Wallet"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          {/* Code for mobile menu (omitted for brevity) */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;