import axios from 'axios';
import { Email } from '../contracts';

class EmailService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/emails.json`;

  get(): Promise<Email[]> {
    return axios.get<Email[]>(this.endpoint).then(res => res.data);
  }
}

export default new EmailService();
