import BlogPostCard from "./BlogPostCard";

interface Article {
  title: string;
  summary: string;
  slug: string;
  author: string;
  date: string;
}

interface LatestArticlesProps {
  posts: Article[];
}

const LatestArticles: React.FC<LatestArticlesProps> = ({ posts }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Latest articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
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
  );
};

export default LatestArticles;
