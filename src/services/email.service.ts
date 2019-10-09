import axios from 'axios';
import { Email } from '../contracts';

class EmailService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/emails`; // ?orderBy="subject"&equalTo="Hello World"`;

  get(): Promise<Email[]> {
    return axios.get<Email[]>(`${this.endpoint}.json`).then(res => res.data);
  }

  update(emailId: string, email: Partial<Email>): Promise<Email> {
    return axios.patch<Email>(`${this.endpoint}/${emailId}.json`, email).then(res => res.data);
  }
}

export default new EmailService();
