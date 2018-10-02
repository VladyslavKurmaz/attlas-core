import { ApiResponse } from './api-response';

export class Item {
  props: any;
  items: any;
}

export class ItemResponse extends ApiResponse {
  data: Item;
}
