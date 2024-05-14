import React from "react";
import BlogPostCard from "../components/BlogPostCard";

interface HomeProps {
  posts: {
    title: string;
    summary: string;
    slug: string;
  }[];
}

const mockPosts = [
  {
    title: "First Post",
    summary: "This is the summary of the first post.",
    slug: "first-post",
  },
  {
    title: "Second Post",
    summary: "This is the summary of the second post.",
    slug: "second-post",
  },
  {
    title: "Third Post",
    summary: "This is the summary of the third post.",
    slug: "third-post",
  },
  {
    title: "Third Post",
    summary: "This is the summary of the third post.",
    slug: "third-post",
  },
  {
    title: "Third Post",
    summary: "This is the summary of the third post.",
    slug: "third-post",
  },
  {
    title: "Third Post",
    summary: "This is the summary of the third post.",
    slug: "third-post",
  },
];

const Home: React.FC<HomeProps> = ({ posts = mockPosts }) => {
  return (
    <div className="container mx-auto px-4">
      <main className="my-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              slug={post.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
