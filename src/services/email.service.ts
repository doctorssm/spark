import axios from 'axios';
import { Email } from '../contracts';

class EmailService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/emails`; // ?orderBy="subject"&equalTo="Hello World"`;

  get(): Promise<Email[]> {
    return axios.get<Email[]>(`${this.endpoint}.json`)
      .then(res => res.data)
      .then(data => Object.values(data));
  }

  update(emailId: string, email: Email): Promise<Email> {
    return axios.put<Email>(`${this.endpoint}/${emailId}.json`, email)
      .then(res => res.data);
  }
}

export default new EmailService();
