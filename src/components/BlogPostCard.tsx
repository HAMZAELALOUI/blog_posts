import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  summary: string;
  slug: string;
  author: string;
  date: string;
  image: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  summary,
  slug,
  author,
  date,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <Image
        src={image || "/assets/default.png"} // Use a default image if none is provided
        alt={title}
        width={800}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-gray-500">
          {author} | {date}
        </div>
        <Link href={`/posts/${slug}`} passHref>
          <h2 className="mt-2 text-xl font-semibold text-gray-800 hover:text-indigo-600">
            {title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600">{summary}</p>
        <Link href={`/posts/${slug}`} passHref>
          <span className="mt-4 inline-block text-indigo-600 hover:text-indigo-900">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
