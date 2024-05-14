import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";
import Link from "next/link";
import Header from "../components/Header";

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
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <img
                src="/images/featured-image.jpg"
                alt="Featured"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500">
                  Curt del Principe | 11/7/23
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-indigo-600">
                  How IBM Researchers Hypnotized ChatGPT into Ignoring Safety
                  Guardrails
                </h2>
                <p className="mt-2 text-gray-600">
                  IBM researchers were able to trick AI models into doing risky
                  things - learn how and find out the po...
                </p>
                <Link href="/posts/hypnotized-chatgpt" passHref>
                  <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Latest articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPosts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  title={post.title}
                  summary={post.summary}
                  slug={post.slug}
                  author={post.author}
                  date={post.date}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Featured Articles
            </h3>
            <ul>
              {mockPosts.map((post) => (
                <li key={post.slug} className="mb-4">
                  <Link href={`/posts/${post.slug}`} passHref>
                    <div className="hover:text-indigo-600">
                      <h4 className="text-lg font-medium">{post.title}</h4>
                      <p className="text-gray-500">{post.author}</p>
                      <p className="text-sm text-gray-400">{post.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
