import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import BlogPost from "../../../../models/BlogPost";

type Data = {
  success: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const post = await BlogPost.findById(id);
        if (!post) {
          return res
            .status(404)
            .json({ success: false, data: "Post not found" });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    case "PUT":
      try {
        const post = await BlogPost.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!post) {
          return res
            .status(404)
            .json({ success: false, data: "Post not found" });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await BlogPost.deleteOne({ _id: id });
        if (!deletedPost) {
          return res
            .status(404)
            .json({ success: false, data: "Post not found" });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, data: "Method not allowed" });
      break;
  }
}
