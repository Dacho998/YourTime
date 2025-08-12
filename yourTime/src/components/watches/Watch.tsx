export interface Watch {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface CartItem extends Watch {
  quantity: number;
}