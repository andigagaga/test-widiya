import { Request, Response } from "express";
import { ProductServices } from "../../services/ProductServices";

export class ProductController {
  private productServices = new ProductServices();

  async createProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.createProduct(req.body);
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
}
