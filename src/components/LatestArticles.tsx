import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import { fetchPosts } from "../../services/postsService";

interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const LatestArticles: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getLatestPosts = async () => {
      try {
        const posts = await fetchPosts();
        if (posts.length > 0) {
          const sortedPosts = posts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setLatestPosts(sortedPosts.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    getLatestPosts();
  }, []);

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-600 mb-4">Latest Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.length > 0 ? (
          latestPosts.map((post) => (
            <BlogPostCard
              key={post._id}
              title={post.title}
              summary={post.content.substring(0, 100)} // Show a part of the content as summary
              slug={post._id}
              author="Unknown" // Adjust this if you have author information
              date={new Date(post.date).toLocaleDateString()}
              image={post.image}
            />
          ))
        ) : (
          <p>No latest articles available.</p>
        )}
      </div>
    </>
  );
};

export default LatestArticles;
