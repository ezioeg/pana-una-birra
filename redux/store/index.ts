import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import authReducer from "@/redux/slices/authSlice";
import cartReducer from "@/redux/slices/cartSlice";
import beersReducer from "@/redux/slices/beersSlice";
import selectedBeerReducer from "@/redux/slices/selectedBeerSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        beers: beersReducer,
        selectedBeer: selectedBeerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // optional for React Native
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// custom hooks to avoid repeating types in each component
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
