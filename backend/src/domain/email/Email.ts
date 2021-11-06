import { EmailSender } from './EmailSender';

export class Email {
  receiver: string;
  subject: string;
  content: string;

  constructor(receiver: string, subject: string, content: string) {
    this.receiver = receiver;
    this.subject = subject;
    this.content = content;
  }

  async send(sender: EmailSender): Promise<void> {
    return sender.sendEmail(this);
  }
}
