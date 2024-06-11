import { db } from "@/services/firebase-setting";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

// Read
export const getFirebaseData = async (nameCollection: string, ...args: any) => {
  const data = query(
    collection(db, nameCollection, ...args),
    orderBy("createdTime")
  );
  const dataSnapshot = await getDocs(data);
  const dataList = dataSnapshot.docs.map((doc: any) => {
    return { ...doc.data(), ...{ id: doc.id } };
  });
  return dataList;
};

// Create
export const addFirebaseData = async (
  nameCollection: string,
  data: any,
  ...args: any
) => {
  try {
    const docRef = await addDoc(collection(db, nameCollection, ...args), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Delele
export const deleteFirebaseData = async (
  nameCollection: string,
  ...args: any
) => {
  try {
    await deleteDoc(doc(db, nameCollection, ...args));
  } catch (e) {
    console.error("Error delete document: ", e);
  }
};
