import UserModel from "./user.model";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repo";
export class UserRepoCont implements UserRepository{
    async createUser(u: User): Promise<User> {
        const newUser = new UserModel(u);
        await newUser.save();
        return newUser.toObject();
    }
}