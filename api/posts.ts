import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("blogPostDatabase");

    switch (req.method) {
      case "GET":
        const posts = await db.collection("posts").find({}).toArray();
        res.status(200).json(posts);
        break;
      case "POST":
        const newPost = req.body;
        await db.collection("posts").insertOne(newPost);
        res.status(201).json(newPost);
        break;
      case "PUT":
        const { id, ...updateData } = req.body;
        await db
          .collection("posts")
          .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
        res.status(200).json({ message: "Post updated" });
        break;
      case "DELETE":
        const { id: deleteId } = req.query;
        await db
          .collection("posts")
          .deleteOne({ _id: new ObjectId(deleteId as string) });
        res.status(200).json({ message: "Post deleted" });
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (e) {
    res.status(500).json({ error: "Failed to connect to database" });
  }
};
