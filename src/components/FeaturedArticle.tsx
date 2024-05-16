import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "../../services/postsService";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const FeaturedArticle: React.FC = () => {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const getFeaturedPost = async () => {
      try {
        const posts = await fetchPosts();
        if (posts.length > 0) {
          const sortedPosts = posts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setFeaturedPost(sortedPosts[0]); // Get the latest post as featured
        }
      } catch (error) {
        console.error("Error fetching featured post:", error);
      }
    };

    getFeaturedPost();
  }, []);

  if (!featuredPost) {
    return <p>No featured article available.</p>;
  }

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-600 mb-4">
        Featured Article
      </h3>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <Image
          src={featuredPost.image || "/assets/default.png"}
          alt="Featured"
          width={800}
          height={600}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="text-sm text-gray-500">
            Unknown Author | {new Date(featuredPost.date).toLocaleDateString()}
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-indigo-600">
            {featuredPost.title}
          </h2>
          <p className="mt-2 text-gray-600">
            {featuredPost.content.substring(0, 100)}...
          </p>
          <Link href={`/posts/${featuredPost._id}`} passHref>
            <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedArticle;
