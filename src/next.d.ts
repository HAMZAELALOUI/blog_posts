import { MulterFile } from "multer";

declare module "next" {
  interface NextApiRequest {
    file: MulterFile;
  }
}

declare global {
  namespace Express {
    interface MulterFile {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      destination: string;
      filename: string;
      path: string;
      buffer: Buffer;
    }
  }
}
