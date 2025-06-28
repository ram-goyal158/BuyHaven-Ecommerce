"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { router, getCartCount, searchQuery, setSearchQuery } = useAppContext();
  const cartCount = getCartCount();
  const [inputValue, setInputValue] = useState(searchQuery || "");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = () => {
    setSearchQuery(inputValue);
    router.push("/all-products");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
        
        {/* 🧡 BuyHaven logo */}
        <div className="text-2xl font-bold cursor-pointer select-none" onClick={() => router.push("/")}>
          <span className="text-orange-500">B</span>
          <span className="text-black">uyHaven</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/all-products" className="hover:text-gray-900 transition">Shop</Link>
          <Link href="/" className="hover:text-gray-900 transition">About Us</Link>
          <Link href="/" className="hover:text-gray-900 transition">Contact</Link>
        </div>

        {/* Search + Cart + Account (Desktop) */}
        <ul className="hidden md:flex items-center gap-4">
          {/* 🔍 Search */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="border rounded-md px-3 py-1 w-48 text-sm focus:outline-none focus:ring"
            />
            <Image
              src={assets.search_icon}
              alt="search"
              onClick={handleSearch}
              className="w-4 h-4 ml-2 cursor-pointer"
            />
          </div>

          {/* 🛒 Cart */}
          <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
            <Image className="w-6 h-6" src={assets.cart_icon} alt="cart icon" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* 👤 Account */}
          <button className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                <span className="text-orange-500">B</span><span className="text-black">uyHaven</span>
              </h2>
              <button onClick={() => setSidebarOpen(false)}>
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-gray-800">
              <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link href="/all-products" onClick={() => setSidebarOpen(false)}>Shop</Link>
              <Link href="/" onClick={() => setSidebarOpen(false)}>About Us</Link>
              <Link href="/" onClick={() => setSidebarOpen(false)}>Contact</Link>
              <hr />
              <button onClick={() => { setSidebarOpen(false); router.push("/cart"); }} className="flex items-center gap-2">
                <Image src={assets.cart_icon} alt="cart" width={20} height={20} />
                Cart ({cartCount})
              </button>
              <button className="flex items-center gap-2">
                <Image src={assets.user_icon} alt="user" width={20} height={20} />
                Account
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
