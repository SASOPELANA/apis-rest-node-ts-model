import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Productos } from "../types/types.products.js";

const productsCollection = collection(db, "products");

// get all
const getAllProducts = async (): Promise<Productos[]> => {
  try {
    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Productos[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get id
const getProductById = async (id: string): Promise<Productos | null> => {
  try {
    const producRef = doc(productsCollection, id);
    const snapshot = await getDoc(producRef);
    return snapshot.exists()
      ? ({ id: snapshot.id, ...snapshot.data() } as Productos)
      : null;
  } catch (error) {
    console.error(`Error al obtener el producto ID ${id}:`, error);
    throw error;
  }
};

// get search

const metodosAll = {
  getAllProducts,
  getProductById,
};

export default metodosAll;
