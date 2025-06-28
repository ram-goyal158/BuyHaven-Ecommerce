'use client';
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { getCartCount, searchQuery, setSearchQuery } = useAppContext();
  const cartCount = getCartCount();
  const [inputValue, setInputValue] = useState(searchQuery || "");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = () => {
    setSearchQuery(inputValue);
    router.push("/all-products");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      {/* Brand Name */}
      <div onClick={() => router.push('/')} className="cursor-pointer text-2xl font-bold select-none">
        <span className="text-orange-500">B</span>
        <span className="text-black">uyHaven</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">Shop</Link>
        <Link href="/" className="hover:text-gray-900 transition">About Us</Link>
        <Link href="/" className="hover:text-gray-900 transition">Contact</Link>
      </div>

      {/* Right Side Items */}
      <ul className="hidden md:flex items-center gap-4">
        {/* Search */}
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

        {/* Cart */}
        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
          <Image className="w-6 h-6" src={assets.cart_icon} alt="cart icon" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Account */}
        <button
          className="flex items-center gap-2 hover:text-gray-900 transition"
          onClick={() => router.push('/login')}
        >
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
  );
};

export default Navbar;
