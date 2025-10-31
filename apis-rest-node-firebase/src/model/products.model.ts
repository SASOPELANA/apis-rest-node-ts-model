import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
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

// post --> create new product
const createProduct = async (data: any): Promise<Productos | null> => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// put --> update producto
const updateProduct = async (
  id: string,
  productData: Omit<Productos, "id">, // --> Omit --> exluye el id
) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData);

    return { id, ...productData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// patch --> actualiza un producto
const updatePatchProduct = async (
  id: string,
  productData: Omit<Productos, "id">,
) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData, { merge: true });

    // otro metodo. import { updateDoc } de "firebase/firestore";
    // await updateDoc(productRef, productData);

    return { id, ...productData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// delete --> delete product
const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const metodosAll = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  updatePatchProduct,
};

export default metodosAll;
