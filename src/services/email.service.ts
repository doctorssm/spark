import { Email } from "../contracts";
import data from '../data/emails.json';

class EmailService {
  readonly endpoint: string = `http://XXX/api/emails`;

  get(): Promise<Email[]> {
    console.log(data);
    return Promise.resolve(data as unknown as Email[]);
    // return fetch(this.endpoint);
  }
}

export default new EmailService();
