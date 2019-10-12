import { Email } from '../contracts';
import { FolderType } from '../enums';
import axios from 'axios';

class EmailService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/emails`; // ?orderBy="subject"&equalTo="Hello World"`;

  // TODO: rename to filters
  get(type?: FolderType): Promise<Email[]> {
    const queryParams = `?orderBy="type"&equalTo="${type || ''}"`;

    return axios.get<Email[]>(`${this.endpoint}.json${queryParams}`)
      .then(res => res.data)
      .then(data => Object.values(data));
  }

  update(emailId: string, email: Email): Promise<Email> {
    return axios.put<Email>(`${this.endpoint}/${emailId}.json`, email)
      .then(res => res.data);
  }
}

export default new EmailService();
