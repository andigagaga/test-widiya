import { Request, Response } from "express";
import { UserServices } from "../../services/UserServices";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../../middlewares/authMiddleware";

export class UserController {
  private userServices = new UserServices();

  async signup(req: Request, res: Response) {
    try {
      const { name, email, password, gender } = req.body;
      const existingUser = await this.userServices.findUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({
          success: false,
          errors: "Existing user found with same email address",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userServices.createUser({
        name,
        email,
        password: hashedPassword,
        gender,
      });

      const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");

      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creating user" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await this.userServices.findUserByEmail(email);

      if (!user) {
        return res.status(400).json({
          success: false,
          errors: "User not found",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          errors: "Invalid email or password",
        });
      }

      const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error logging in" });
    }
  }

  async getProfile(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      const user = await this.userServices.findUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
    }
  }
}
