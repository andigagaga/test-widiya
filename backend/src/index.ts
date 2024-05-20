import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import userRouter from "./route/user/UserRoutes";
import productRouter from "./route/product/ProductRouter";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 6000;

    const router = express.Router();

    app.use(express.json());
    app.use("api/v1", router);

    app.use("/api/v1", userRouter);
    app.use("/api/v1", productRouter);

    app.get("/", (req: Request, res: Response) => {
      res.send("Express App is running ");
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
