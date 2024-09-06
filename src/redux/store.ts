import { configureStore } from "@reduxjs/toolkit";
import pdfViwerReducer from "./Slice/PdfViwer"



const store = configureStore({
    reducer: {
        pdfViwer: pdfViwerReducer,
    },
  });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;