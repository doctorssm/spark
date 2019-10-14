import { Email } from '../contracts';
import { EmailType } from '../enums';
import axios from 'axios';

class EmailService {
  readonly endpoint: string = `https://spark-890bb.firebaseio.com/emails`;

  get(type: EmailType): Promise<Email[]> {
    const queryParams = type ? `?orderBy="type"&equalTo="${type}"` : '';

    return axios
      .get<Email[]>(`${this.endpoint}.json${queryParams}`)
      .then((res) => res.data)
      .then((data) => Object.values(data));
  }

  update(emailId: string, email: Email): Promise<Email> {
    return axios.put<Email>(`${this.endpoint}/${emailId}.json`, email).then((res) => res.data);
  }

  delete(emailId: string): Promise<null> {
    return axios.delete<null>(`${this.endpoint}/${emailId}.json`).then((res) => res.data);
  }
}

export default new EmailService();
