import React from "react";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  summary: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  summary,
  slug,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{summary}</p>
          <div className="mt-4">
            <Link href={`/posts/${slug}`} passHref>
              <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                Read more
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
