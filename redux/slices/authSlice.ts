import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/firebase/services/authServices";
import { AuthStateTypes } from "@/types/authTypes";

export const login = createAsyncThunk(
    "auth/login",
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const userCredential = await AuthService.login(email, password);
            return userCredential;
        } catch (error: any) {
            return rejectWithValue(error.code || "auth/unknown-error");
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (
        {
            email,
            password,
            name,
        }: { email: string; password: string; name: string },
        { rejectWithValue }
    ) => {
        try {
            const userCredential = await AuthService.register(
                email,
                password,
                name
            );
            return userCredential;
        } catch (error: any) {
            return rejectWithValue(error.code || "auth/unknown-error");
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await AuthService.logout();
            return null;
        } catch (error: any) {
            return rejectWithValue(error.code || "auth/unknown-error");
        }
    }
);

const initialState: AuthStateTypes = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error de autenticación";
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error de registro";
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export default authSlice.reducer;
