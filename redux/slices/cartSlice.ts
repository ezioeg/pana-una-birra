import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    Unsubscribe,
} from "@reduxjs/toolkit";
import { db } from "@/firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";
import { CartService } from "@/firebase/services/cartServices";
import { CartStateTypes, CartItemTypes } from "@/types/cartTypes";

const initialState: CartStateTypes = {
    loading: false,
    error: null,
    items: [],
    totalQuantity: 0,
};

export const subscribeToSharedCart = createAsyncThunk(
    "cart/subscribe",
    async (_, { dispatch }) => {
        const sharedCartRef = collection(db, "sharedCart");
        const q = query(sharedCartRef);

        return new Promise<Unsubscribe>((resolve) => {
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const items = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as CartItemTypes[];

                dispatch(setCartItems(items));
            });
            resolve(unsubscribe);
        });
    }
);

export const addToSharedCart = createAsyncThunk(
    "cart/addItem",
    async (item: Omit<CartItemTypes, "id">, { rejectWithValue }) => {
        try {
            return await CartService.addItem(item);
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateCartItemQuantity = createAsyncThunk(
    "cart/updateItem",
    async (
        { id, quantity }: { id: string; quantity: number },
        { rejectWithValue }
    ) => {
        try {
            await CartService.updateItemQuantity(id, quantity);
            return { id, quantity };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeFromSharedCart = createAsyncThunk(
    "cart/removeItem",
    async (id: string, { rejectWithValue }) => {
        try {
            await CartService.removeItem(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<CartItemTypes[]>) => {
            state.items = action.payload;
            state.totalQuantity = action.payload.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
        },
        addToCart: (state, action: PayloadAction<CartItemTypes>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalQuantity += action.payload.quantity;
        },

        incrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
            }
        },

        decrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
            } else {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
                state.totalQuantity = Math.max(
                    0,
                    state.totalQuantity - (item?.quantity || 0)
                );
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemToRemove = state.items.find(
                (item) => item.id === action.payload
            );
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            state.totalQuantity = Math.max(
                0,
                state.totalQuantity - (itemToRemove?.quantity || 0)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(subscribeToSharedCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(subscribeToSharedCart.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(subscribeToSharedCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addToSharedCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToSharedCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateCartItemQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartItemQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(removeFromSharedCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromSharedCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    setCartItems,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
