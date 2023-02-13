import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";

export const store = configureStore({
    reducer:{
        users: UserSlice
    },
})