import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  summary: string;
  slug: string;
  author: string;
  date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  summary,
  slug,
  author,
  date,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
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
