import React from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 z-40 w-full fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Next in AI</Link>
        </div>
        <div>
          <Link
            href="/"
            className="text-gray-600 hover:text-indigo-600 mx-2 p-3 rounded-md hover:text-white hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/Write"
            className="text-gray-600 hover:text-indigo-600 mx-2 p-3 rounded-md hover:text-white hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Write
          </Link>
          <Link
            href="/MyBlogs"
            className="text-gray-600 hover:text-indigo-600 mx-2 p-3 rounded-md hover:text-white hover:bg-red-600 transition duration-300 ease-in-out"
          >
            My Blogs
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-indigo-600 mx-2"
          >
            <Button>Login</Button>
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-indigo-600 mx-2"
          >
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
