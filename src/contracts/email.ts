import { EmailType } from '../enums';

export interface Email {
  id: string;
  date: Date;
  from: string;
  subject: string;
  content: string;
  read: boolean;
  deleted: boolean;
  type: EmailType;
}
