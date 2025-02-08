"use client";

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = (
    <>
      <Link href="/" className="hover:text-green-800 text-blue-800 transition duration-300">
        Home
      </Link>
      <Link href="/docs" className="hover:text-green-800 text-blue-800 transition duration-300">
        Docs
      </Link>
      <Link href="/about" className="hover:text-green-800 text-blue-800 transition duration-300">
        About Us
      </Link>
      <Link href="/updates" className="hover:text-green-800 text-blue-800 transition duration-300">
        Updates
      </Link>
      <Link
        href="/signup"
        className="bg-green-800 hover:bg-green-700 text-white px-4 rounded-full transition duration-300"
      >
        Sign Up
      </Link>
      <Link href="/login" className="hover:text-green-800 text-blue-800 hover:text-white transition duration-300">
        Login
      </Link>
    </>
  )

  return (
    <header className="bg-gradient-to-r from-blue-300 to-green-300 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Soulevity" className="h-8" />
        </Link>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          {navLinks}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          {navLinks}
        </div>
      )}
    </header>
  )
}