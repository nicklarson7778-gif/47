// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "xmxmaka@gmail.com",
    pass: "dypu xkck qiuu iwxd"
  }
});
