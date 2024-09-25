"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isElektronikVisible, setIsElektronikVisible] = useState(false);
    const [isFashionVisible, setIsFashionVisible] = useState(false);

    const toggleCategoryVisibility = () => {
        setIsCategoryVisible(!isCategoryVisible);
    };
    const toggleElektronikVisibility = () => {
        setIsElektronikVisible(!isElektronikVisible);
    };
    const toggleFashionVisibility = () => {
        setIsFashionVisible(!isFashionVisible);
    };

    return(
    <nav className="">
        <div className="bg-green-800 px-14">
            <div className="justify justify-between flex py-5">
                <a href="#" className="text-5xl font-bold text-white">Logo</a>
                <div className="justify-normal flex items-center rounded-lg">
                    <input type="text" className="w-full h-8 px-4 border-none focus:outline-none rounded-l-lg" placeholder="What are you looking for?" />
                    <button className="bg-gray-400 py-1 px-3 rounded-r-lg">
                        <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
                <div className="justify-normal flex items-center gap-5">
                    <Link href={"/pofile"}>
                        <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                    </Link>
                    <Link href={"#"}>
                        <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
        <div className="justify-between flex items-center px-14 py-3 bg-green-900 text-white">
            <div className="justify-normal flex items-center gap-10">
                <button className="justify-normal flex items-center" onClick={toggleCategoryVisibility}>
                    <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                    <h5 className="text-xl font-semibold">Browse by category</h5>
                </button>
                <Link href={"/"}>Home</Link>
                <button>Shop by Brands</button>
            </div>
            <div className="justify-normal flex items-center gap-2">
                <Link href={"#"}>
                    <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                    </svg>
                </Link>
                <Link href={"https://www.linkedin.com/in/naufal-arkananta"}>
                    <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
                </Link>
                <Link href={"https://www.instagram.com/4rkanns/"}>
                    <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>  
                </Link>
            </div>
        </div>
        <div className="">
        {isCategoryVisible && (
            <div className="w-full absolute py-3 px-14 bg-green-800 text-white">
                <div className="justify-evenly flex items-center">
                    <div className="relative">
                    <button
                        className="justify-normal flex items-center gap-1 rounded-lg px-5 hover:bg-white hover:text-black"onClick={toggleElektronikVisibility}>Elektronik
                        <svg className="w-[21px] h-[21px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </button>
                    {/* Subkategori Elektronik di sini */}
                    {isElektronikVisible && (
                        <div className="absolute bg-gray-700 text-white mt-2 rounded-lg p-2 left-0 top-fdivl">
                            <button className="py-1 px-2 hover:bg-gray-600">Laptop</button>
                            <button className="py-1 px-2 hover:bg-gray-600">Smartphone</button>
                            <button className="py-1 px-2 hover:bg-gray-600">Televisi</button>
                        </div>
                    )}
                    </div>
                    <div className="relative">
                        <button className="rounded-lg px-5 hover:bg-white hover:text-black" onClick={toggleFashionVisibility}>Fashion</button>
                        {isFashionVisible && (
                            <div className="absolute bg-gray-700 text-white mt-2 rounded-lg p-2 left-0 top-fdivl">
                                <button className="py-1 px-2 hover:bg-gray-600">Men</button>
                                <button className="py-1 px-2 hover:bg-gray-600">Woman</button>
                                <button className="py-1 px-2 hover:bg-gray-600">Child</button>
                            </div>
                        )}
                    </div>
                    <button>Automotive</button>
                    <button>Home & Livestyle</button>
                </div>
            </div>
        )}
        </div>
    </nav>
    )
}