export interface Email {
  date: Date;
  from: string;
  subject: string;
  content: string;
  read: boolean;
  deleted: boolean;
}
