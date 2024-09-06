import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { Ipdf, IpdfViwer } from "../../types/typew";

const initialState: Ipdf = {
    pdfviwerInfo: {}
};

const slice = createSlice({
    name: "pdfViewer",
    initialState,
    reducers: {
        setPdfViewerInfo: (state, action) => {
            state.pdfviwerInfo = action.payload;
        }
    }
});

export const { setPdfViewerInfo } = slice.actions;
export default slice.reducer;

export const getpdfViwer = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get('http://localhost:3000/pdfViwer');
            const pdfData = res.data; 
            dispatch(setPdfViewerInfo(pdfData));
        } catch (error) {
            console.log(error, "Failed to fetch PDF data");
        }
    };
};
