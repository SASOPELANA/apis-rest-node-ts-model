// tipado para los productos

export interface Productos {
  id: string;
  name: string;
  price: number;
  categories: string[];
  description?: string;
  image: string;
}
