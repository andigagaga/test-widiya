import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";

export default new (class UploadImage {
  upload(fieldName: string) {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "src/uploads");
      },

      filename: (req, file, cb) => {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
      },
    });

    const uploadFile = multer({ storage });
    return (req: Request, res: Response, next: NextFunction) => {
      uploadFile.single(fieldName)(req, res, (err: any) => {
        if (err) {
          return res
            .status(400)
            .json({ message: "Error while processing upload Image!" });
        }
        next();
      });
    };
  }
})();
