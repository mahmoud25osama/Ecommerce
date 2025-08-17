import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./ToggleCartSlice";

export const store = configureStore({
    reducer: {
        cart: toggleCartReducer,
    },
});


