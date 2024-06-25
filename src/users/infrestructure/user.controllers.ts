import { Request, Response } from "express";
import { UserRepoCont } from "./user.repo.cont";
import { CreateUser } from "../application/createUser";

const UHC = new UserRepoCont();
const createUser = new CreateUser(UHC);

export const createUserCont = (req: Request, res: Response) => {
    createUser.exe(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({err: err}));
}
