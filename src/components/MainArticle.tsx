import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchPosts } from "../../services/postsService";

interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const MainArticle: React.FC = () => {
  const [mainPost, setMainPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const getMainPost = async () => {
      try {
        const posts = await fetchPosts();
        if (posts.length > 0) {
          const sortedPosts = posts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setMainPost(sortedPosts[0]); // Get the latest post as main article
        }
      } catch (error) {
        console.error("Error fetching main post:", error);
      }
    };

    getMainPost();
  }, []);

  if (!mainPost) {
    return <p>No main article available.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <Image
        src={mainPost.image || "/assets/default.png"}
        alt="Main Article"
        width={800}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-gray-500">
          Unknown Author | {new Date(mainPost.date).toLocaleDateString()}
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-indigo-600">
          {mainPost.title}
        </h2>
        <p className="mt-2 text-gray-600">
          {mainPost.content.substring(0, 100)}...
        </p>
        <Link href={`/posts/${mainPost._id}`} passHref>
          <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainArticle;
