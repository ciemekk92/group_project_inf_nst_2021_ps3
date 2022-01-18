import { EmailSender } from '../../domain/email/EmailSender';
import nodemailer, { Transporter } from 'nodemailer';
import { Email } from '../../domain/email/Email';
import { nodemailerConfig } from '../../config/NodemailerConfig';

export class NodemailerSender implements EmailSender {
  private readonly sender: Transporter;

  constructor() {
    this.sender = nodemailer.createTransport(nodemailerConfig);
    this.sender
      .verify()
      .then(() => console.log('Connected to email service'))
      .catch(() => console.log('Cannot connect to email service'));
  }

  async sendEmail(email: Email): Promise<void> {
    await this.sender.sendMail({
      from: '"Boardel app" <youremail@gmail.com>',
      to: email.receiver,
      subject: email.subject,
      html: email.content
    });
  }
}
