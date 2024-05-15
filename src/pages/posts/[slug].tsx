import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const mockPost = {
    title: "First Post",
    content: "This is the detailed content of the first post.",
    author: "John Doe",
    date: "Jan 1, 2022",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{mockPost.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>{mockPost.author}</span> | <span>{mockPost.date}</span>
      </div>
      <div className="text-lg text-gray-800">{mockPost.content}</div>
    </div>
  );
};

export default Post;
