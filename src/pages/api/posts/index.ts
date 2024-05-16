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

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await BlogPost.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    case "POST":
      try {
        const post = await BlogPost.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, data: "Method not allowed" });
      break;
  }
}
