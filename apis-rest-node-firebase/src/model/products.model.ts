import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Productos } from "../types/types.products.js";

const productsCollection = collection(db, "products");

const getAllProducts = async (): Promise<Productos[]> => {
  try {
    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Productos[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getProductById = async (id: string): Promise<Productos | null> => {
  try {
    const docRef = doc(db, "products", id); // referencia al documento
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Productos;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const metodosAll = {
  getAllProducts,
  getProductById,
};

export default metodosAll;
