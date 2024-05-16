import mongoose, { Document, Model, Schema } from "mongoose";

interface BlogPost extends Document {
  title: string;
  content: string;
  date: string;
  image: string;
}

const BlogPostSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const BlogPostModel: Model<BlogPost> =
  mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);

export default BlogPostModel;
export type { BlogPost };
