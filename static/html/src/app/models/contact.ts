import { ApiResponse } from './api-response';

export class Contact {
  id: string;
  active: boolean;
}

export class ContactsResponse extends ApiResponse {
  data: Contact[];
}
