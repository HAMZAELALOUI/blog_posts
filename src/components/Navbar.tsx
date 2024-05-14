// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">
          <Link href="/" passHref>
            My Blog
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" passHref>
            <span className="text-gray-600 hover:text-indigo-600">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-600 hover:text-indigo-600">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-600 hover:text-indigo-600">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
