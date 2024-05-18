import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ButtonEd from "./ButtonEd";
import SearchBar from "./SearchBar";
import EditModal from "../pages/EditModal";
import { BlogPost } from "../../models/BlogPost";
import {
  fetchPosts,
  updatePost,
  deletePost,
} from "../../services/postsService";

const UserBlogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };
    loadPosts();
  }, []);

  const handleEdit = (id: string) => {
    const postToEdit = posts.find((post) => post._id === id);
    if (postToEdit) {
      setCurrentPost(postToEdit);
      setIsModalOpen(true);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSave = async (updatedPost: BlogPost, image: File | null) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedPost.title);
      formData.append("content", updatedPost.content);
      formData.append("date", updatedPost.date);
      if (image) {
        formData.append("image", image);
      }

      const updatedData = await updatePost(updatedPost._id, formData);
      setPosts(
        posts.map((post) => (post._id === updatedPost._id ? updatedData : post))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const truncateContent = (content: string) => {
    const words = content.split(" ");
    const truncatedWords = words.slice(0, Math.ceil(words.length * 0.25));
    return (
      truncatedWords.join(" ") +
      (truncatedWords.length < words.length ? "..." : "")
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
        My Blog Posts
      </h1>
      <div className="mb-8">
        <SearchBar
          placeholder="Search articles"
          onSearch={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {truncateContent(post.content)}
              </p>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <div className="flex justify-between">
                <ButtonEd
                  onClick={() => handleEdit(post._id)}
                  className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  <FaEdit className="mr-2" /> Edit
                </ButtonEd>
                <ButtonEd
                  onClick={() => handleDelete(post._id)}
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                >
                  <FaTrash className="mr-2" /> Delete
                </ButtonEd>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ul className="inline-flex items-center -space-x-px">
          {Array.from(
            { length: Math.ceil(filteredPosts.length / postsPerPage) },
            (_, i) => i + 1
          ).map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`py-2 px-3 leading-tight ${
                  currentPage === number
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-500"
                } border border-gray-300 hover:bg-gray-200 hover:text-gray-700`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && currentPost && (
        <EditModal
          post={currentPost}
          isOpen={isModalOpen}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UserBlogs;
