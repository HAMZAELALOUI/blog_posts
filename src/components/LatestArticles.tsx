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

const LatestArticles: React.FC<LatestArticlesProps> = ({ posts }) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-600 mb-4">Latest articles</h3>
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
    </>
  );
};

export default LatestArticles;
