import { MoreThanOrEqual } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";
import { subDays } from "date-fns";
import { User } from "../entity/User";

export class ProductServices {
  private productRepository = AppDataSource.getRepository(Product);

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const product = this.productRepository.create(productData);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      console.log(error);
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
}
