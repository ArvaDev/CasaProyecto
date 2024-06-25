import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repo";
export class CreateUser{
    constructor(private repo: UserRepository){}
    async exe(u: User): Promise<User>{
        return this.repo.createUser(u);
    }
}