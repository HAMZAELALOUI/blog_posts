import axios from "axios";

const API_URL = "/api/posts";

// Fetch all posts
export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new post
export const addPost = async (post: any) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

// Edit a post
export const editPost = async (id: string, post: any) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

// Delete a post
export const deletePost = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
