import { Router } from "express";
import { UserController } from "../../controllers/UserController/AuthController";
import { authenticateToken } from "../../middlewares/authMiddleware";
// import { getProfile } from "../../controllers/UserController/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signup", (req, res) => userController.signup(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));

userRouter.get("/getProfile", authenticateToken, (req, res) =>
  userController.getProfile(req, res)
);

export default userRouter;
