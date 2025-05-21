import { db, firebaseAuth } from "@/firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface AuthResponse {
    user: User | null;
    error?: string;
}

export const AuthService = {
    async login(email: string, password: string): Promise<AuthResponse> {
        try {
            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );

            await AsyncStorage.multiSet([
                ["userEmail", email],
                ["userPassword", password],
            ]);

            return { user: userCredential.user };
        } catch (error: any) {
            return { user: null, error: error.code };
        }
    },

    async register(
        email: string,
        password: string,
        name: string
    ): Promise<AuthResponse> {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );

            await setDoc(doc(db, "users", userCredential.user.uid), {
                uid: userCredential.user.uid,
                email,
                name,
                createdAt: new Date().toISOString(),
            });

            return { user: userCredential.user };
        } catch (error: any) {
            return { user: null, error: error.code };
        }
    },

    async logout(): Promise<void> {
        await signOut(firebaseAuth);
        await AsyncStorage.multiRemove(["userEmail", "userPassword"]);
    },
};
