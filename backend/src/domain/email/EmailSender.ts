import { Email } from './Email';

export interface EmailSender {
  sendEmail(email: Email): Promise<void>;
}
