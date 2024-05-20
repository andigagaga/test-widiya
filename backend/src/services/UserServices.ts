import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserServices {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    try {
      const user = this.userRepository.create(userData);
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to find user");
    }
  }

  async findUserById(id: number): Promise<User | undefined> {
    try {
      return this.userRepository.findOneBy({ id });
    } catch (error) {
      console.log(error);
    }
  }
}
