import { Request, Response } from "express";
import { ProductServices } from "../../services/ProductServices";
import { AuthenticatedRequest } from "../../middlewares/authMiddleware";

export class ProductController {
  private productServices = new ProductServices();

  async createProduct(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const product = await this.productServices.createProduct(
        req.body,
        userId
      );
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const product = await this.productServices.getAllProduct();
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await this.productServices.getProductById(
        Number(req.params.id)
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {}
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.updateProduct(
        Number(req.params.id),
        req.body
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.deleteProduct(
        Number(req.params.id)
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      console.log(error);
    }
  }

  async getNewProduct(req: Request, res: Response) {
    try {
      const newProduct = await this.productServices.getNewProduct(8);
      return res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductByUser(req: Request, res: Response) {
    try {
      const data = await this.productServices.getProductByUser(
        Number(req.params.id)
      );
      if (!data) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async updateProductByUser(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      const productId = Number(req.params.id);
      const product = await this.productServices.updateProductByUser(
        productId,
        req.body,
        userId
      );

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const { user, ...productData } = product;
      return res.status(200).json(productData);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async deleteProductByUser(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      const productId = Number(req.params.id);
      const success = await this.productServices.deleteProductByUser(
        productId,
        userId
      );
      if (!success) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Product deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
