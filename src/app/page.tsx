import React from "react";
import Header from "../components/Header";
import FeaturedArticle from "../components/FeaturedArticle";
import MainArticle from "../components/MainArticle";
import LatestArticles from "../components/LatestArticles";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:pr-8">
            <MainArticle />
            <LatestArticles />
          </div>
          <div className="md:w-1/4">
            <FeaturedArticle />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
