import axios from "axios";
import { BlogPost } from "../models/BlogPost";

const API_URL = "/api/posts";

export const fetchPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const createPost = async (formData: FormData): Promise<BlogPost> => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const updatePost = async (
  id: string,
  formData: FormData
): Promise<BlogPost> => {
  const response = await axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const deletePost = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
