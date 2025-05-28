import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BeerTypes } from "@/types/beerTypes";

const selectedBeerSlice = createSlice({
    name: "selectedBeer",
    initialState: {
        beer: null as BeerTypes | null,
    },
    reducers: {
        setSelectedBeer: (state, action: PayloadAction<BeerTypes>) => {
            state.beer = action.payload;
        },
        clearSelectedBeer: (state) => {
            state.beer = null;
        },
    },
});

export const { setSelectedBeer, clearSelectedBeer } = selectedBeerSlice.actions;
export default selectedBeerSlice.reducer;
