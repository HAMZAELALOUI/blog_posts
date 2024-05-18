import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { updatePost } from "../../services/postsService";

interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

interface EditModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedPost: BlogPost, image: File | null) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  post,
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (post) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("date", new Date().toISOString());
      if (image) {
        formData.append("image", image);
      }

      try {
        const updatedPost = await updatePost(post._id, formData);
        onSave(updatedPost, image);
        onClose();
      } catch (error) {
        console.error("Error updating post:", error);
      }
    }
  };

  if (!isOpen || !post) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the title of your blog post"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the content of your blog post"
            rows={10}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500"
          />
          {image && (
            <p className="mt-2 text-gray-600">Selected file: {image.name}</p>
          )}
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Save
          </Button>
          <Button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
