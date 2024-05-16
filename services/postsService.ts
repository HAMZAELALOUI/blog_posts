import axios from "axios";
import { BlogPost } from "../models/BlogPost";

const API_URL = "/api/posts";

export const fetchPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const createPost = async (post: BlogPost): Promise<BlogPost> => {
  const response = await axios.post(API_URL, post);
  return response.data.data;
};

export const updatePost = async (
  id: string,
  post: BlogPost
): Promise<BlogPost> => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data.data;
};

export const deletePost = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
