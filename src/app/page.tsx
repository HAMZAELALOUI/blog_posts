import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";
import Link from "next/link";
import Header from "../components/Header";
import FeaturedArticle from "../components/FeaturedArticle";
import MainArticle from "../components/MainArticle";
import LatestArticles from "../components/BlogPostCard";

const mockPosts = [
  {
    title:
      "How IBM Researchers Hypnotized ChatGPT into Ignoring Safety Guardrails",
    summary:
      "IBM researchers were able to trick AI models into doing risky things - learn how and find out the po...",
    slug: "hypnotized-chatgpt",
    author: "Curt del Principe",
    date: "11/7/23",
  },
  {
    title: "AI in Hiring: Reducing Bias or Making It Worse?",
    summary:
      "Exploring the implications of AI in hiring processes and whether it reduces or exacerbates bias.",
    slug: "ai-hiring-bias",
    author: "Martina Bretous",
    date: "11/7/23",
  },
  {
    title:
      "AI Headshots Will Save You Money, But They’re Still Riddled With Bias",
    summary:
      "An in-depth look at how AI-generated headshots can save costs but still struggle with bias issues.",
    slug: "ai-headshots-bias",
    author: "Caroline Forsey",
    date: "11/7/23",
  },
];

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
