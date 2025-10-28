import products from "../model/products.json";

// tipado para los productos
interface Productos {
  id: number;
  name: string;
  price: number;
  categories: string;
  image: string;
}

const listaProductos = products as Productos[];

export default listaProductos;
