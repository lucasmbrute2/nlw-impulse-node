import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "59f34adf789a5a",
        pass: "a5829b09cf04d5",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendEmail({subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Lucas Souza <lucasmbrute614@gmail.com>",
            subject,
            html: body,
        });
    }
}
