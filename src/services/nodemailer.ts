import nodemailer from "nodemailer";
//vntb tdxe dhea xfan
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "armandorovi1590@gmail.com",
        pass: "vntb tdxe dhea xfan",
    },
});