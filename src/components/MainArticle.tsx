// components/FeaturedArticle.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainArticle: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <Image
        src="/images/featured-image.jpg"
        alt="Featured"
        width={800}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-gray-500">Curt del Principe | 11/7/23</div>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-indigo-600">
          How IBM Researchers Hypnotized ChatGPT into Ignoring Safety Guardrails
        </h2>
        <p className="mt-2 text-gray-600">
          IBM researchers were able to trick AI models into doing risky things -
          learn how and find out the po...
        </p>
        <Link href="/posts/hypnotized-chatgpt" passHref>
          <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainArticle;
