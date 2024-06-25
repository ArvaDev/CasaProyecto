import { User } from "./user"
export interface UserRepository{
    createUser(u: User): Promise<User>;
}