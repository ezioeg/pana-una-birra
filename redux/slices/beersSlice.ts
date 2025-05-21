import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBeers } from "@/firebase/services/beersServices";
import { BeerTypes } from "@/types/beerTypes";

export const getBeers = createAsyncThunk(
    "beers/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchBeers();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const selectBeerByBarcode = (
    state: { beers: { items: BeerTypes[] } },
    barcode: string
) => {
    return state.beers.items.find(
        (beer: BeerTypes) => beer.barcode === barcode
    );
};

const beersSlice = createSlice({
    name: "beers",
    initialState: {
        items: [] as BeerTypes[],
        loading: false,
        error: null as unknown,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBeers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBeers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload as BeerTypes[];
            })
            .addCase(getBeers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default beersSlice.reducer;
