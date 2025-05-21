import { db } from "@/firebase/config";
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    addDoc,
} from "firebase/firestore";
import { Unsubscribe } from "@reduxjs/toolkit";
import { CartItemTypes } from "@/types/cartTypes";

export const CartService = {
    async subscribeToSharedCart(
        callback: (items: CartItemTypes[]) => void
    ): Promise<Unsubscribe> {
        const sharedCartRef = collection(db, "sharedCart");
        const q = query(sharedCartRef);

        return onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as CartItemTypes[];
            callback(items);
        });
    },

    async addItem(item: Omit<CartItemTypes, "id">): Promise<CartItemTypes> {
        const docRef = await addDoc(collection(db, "sharedCart"), item);
        return { id: docRef.id, ...item };
    },

    async updateItemQuantity(id: string, quantity: number): Promise<void> {
        await updateDoc(doc(db, "sharedCart", id), { quantity });
    },

    async removeItem(id: string): Promise<void> {
        await deleteDoc(doc(db, "sharedCart", id));
    },
};
