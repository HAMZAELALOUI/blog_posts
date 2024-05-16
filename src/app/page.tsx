"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FeaturedArticle from "../components/FeaturedArticle";
import MainArticle from "../components/MainArticle";
import LatestArticles from "../components/LatestArticles";
import { fetchPosts } from "../../services/postsService";
import Link from "next/link";
import Button from "../components/Button";

const Home: React.FC = () => {
  const [hasContent, setHasContent] = useState(true);

  useEffect(() => {
    const checkContent = async () => {
      try {
        const data = await fetchPosts();
        setHasContent(data.length > 0);
      } catch (error) {
        console.error("Error checking content:", error);
        setHasContent(false);
      }
    };

    checkContent();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {hasContent ? (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/4 md:pr-8">
              <MainArticle />
              <LatestArticles />
            </div>
            <div className="md:w-1/4">
              <FeaturedArticle />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600 mb-4">
              There is no content. Create the first content.
            </p>
            <Link href="/Write">
              <Button>Create Content</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
