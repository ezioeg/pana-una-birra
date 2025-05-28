import { db } from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";

export const fetchBeers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "beers"));
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw new Error("Error fetching beers: " + error);
    }
};
