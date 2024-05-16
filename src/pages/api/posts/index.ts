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

  switch (req.method) {
    case "GET":
      try {
        const posts = await BlogPost.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        await runMiddleware(req, res, uploadMiddleware);

        const { title, content, date } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : "";

        const post = await BlogPost.create({ title, content, date, image });
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ success: false, data: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
