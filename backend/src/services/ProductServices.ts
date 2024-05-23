import { MoreThanOrEqual } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";
import { subDays } from "date-fns";
import { User } from "../entity/User";

export class ProductServices {
  private productRepository = AppDataSource.getRepository(Product);
  private userRepository = AppDataSource.getRepository(User);

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createProduct(
    productData: Partial<Product>,
    userId: number
  ): Promise<Product> {
    try {
      const user = await this.userRepository.findOneBy({ id: userId });
      if (!user) throw new Error("User not found");

      const product = this.productRepository.create({
        ...productData,
        user: user, // Set relasi user
        user_id: user.id, // Isi user_id dengan ID pengguna
      });
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      console.log(error);
      throw error; // Tambahkan ini
    }
  }

  async getAllProduct(): Promise<Product[]> {
    try {
      return this.productRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id: number): Promise<Product | undefined> {
    try {
      return this.productRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id: number, productData: Partial<Product>) {
    try {
      await this.productRepository.update({ id }, productData);
      const updateProduct = await this.productRepository.findOne({
        where: { id },
      });
      return updateProduct;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id: number) {
    try {
      const result = await this.productRepository.delete({ id });
      return result.affected > 0;
    } catch (error) {
      console.log(error);
    }
  }

  async getNewProduct(limit: number): Promise<Product[]> {
    try {
      const thirtyDaysAgo = subDays(new Date(), 30);
      return this.productRepository.find({
        where: { created_at: MoreThanOrEqual(thirtyDaysAgo) },
        order: { created_at: "DESC" },
        take: limit,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getProductByUser(id: number): Promise<Product[]> {
    try {
      const product = await this.productRepository.find({
        where: { user_id: id },
      });

      return product;
    } catch (error) {}
  }

  async updateProductByUser(
    productId: number,
    productData: Partial<Product>,
    userId: number
  ): Promise<Product | null> {
    try {
      const product = await this.getProductById(productId);
      if (!product) {
        throw new Error("Product not found");
      }

      if (product.user_id !== userId) {
        throw new Error("You are not authorized to update this product");
      }

      await this.productRepository.update(productId, productData);
      return await this.getProductById(productId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProductByUser(productId: number, userId: number) {
    try {
      const product = await this.getProductById(productId);
      if (!product) {
        throw new Error("Product not found");
      }
      if (product.user_id !== userId) {
        throw new Error("You are not authorized to delete this product");
      }

      const result = await this.productRepository.delete(productId);
      return result.affected > 0;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
