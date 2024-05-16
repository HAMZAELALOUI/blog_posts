import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import dbConnect from "../../../../lib/dbConnect";
import BlogPost from "../../../../models/BlogPost";

type Data = {
  success: boolean;
  data?: any;
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  }),
});

const uploadMiddleware = upload.single("image");

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

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
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    case "PUT":
      try {
        await runMiddleware(req, res, uploadMiddleware);

        const { title, content, date } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : undefined;

        const updatedPost = await BlogPost.findByIdAndUpdate(
          id,
          { title, content, date, ...(image && { image }) },
          { new: true }
        );

        if (!updatedPost) {
          return res
            .status(404)
            .json({ success: false, data: "Post not found" });
        }
        res.status(200).json({ success: true, data: updatedPost });
      } catch (error) {
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await BlogPost.findByIdAndDelete(id);
        if (!deletedPost) {
          return res
            .status(404)
            .json({ success: false, data: "Post not found" });
        }
        res.status(200).json({ success: true, data: deletedPost });
      } catch (error) {
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, data: "Method not allowed" });
      break;
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
