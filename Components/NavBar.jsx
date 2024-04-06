import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
    const { currentAccount, currentWallet } = useContext(CrowdFundingContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuList = ["White Paper", "Project", "Donation", "Members"];
    return (
        <div class = "backgroundMain">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
            md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <div class="flex items-center">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center mr-8"
                        >
                            <Logo color="text-white" /> 
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100
                            uppercase">
                                Company
                            </span>
                        </a>
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            {menuList.map((el, i) => (
                            <li key={1 + 1}>
                                <a
                                  href="/"
                                  aria-label="Our product"
                                  title="Our Product"
                                  class = "font-medium tracking-wide text-gray-100 transition-colors
                                  duration-200 hover:text-teal-accent-400"
                                >
                                    {el}
                                </a>
                            </li>
                        </ul>
                        ))}
