import React, { useState } from "react";
import Button from "../components/Button";
import { createPost } from "../../services/postsService";

const Write: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", new Date().toISOString());
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await createPost(formData);
      console.log("Post created:", response);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 mt-8">
        Create a New Blog Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
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
        <div className="text-center">
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
};

export default Write;
