import { Request, Response } from "express";
import { UserRepoCont } from "./user.repo.cont";
import { CreateUser } from "../application/createUser";
import { transporter } from "../../services/nodemailer"

const UHC = new UserRepoCont();
const createUser = new CreateUser(UHC);

export const createUserCont = async (req: Request, res: Response) => {
    if (req.body.tipo == "ladron") {
        await transporter.sendMail({
            from: '"Tu casa" <armandorovi1590@mail.com>',
            to: "armandorovi1590@gmail.com",
            subject: "Tu casa",
            text: "Han entrado a tu casa",
            html: "<b>Han entrado a tu casa</b>",
        });
    }
    createUser.exe(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ err: err }));
}
