
import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name: "app",
    initialState: {
        modal: {
            isOpen: false,
            // modalType: null
        }
    },
    reducers:{
        openModal: (state, action) => {
            state.modal.isOpen = true;
            state.modal.modalType = action.payload;
        },
        closeModal: (state) => {
            state.modal.isOpen = false;
            // state.modal.modalType = null;
        }
     }
})

export const {openModal, closeModal} = appSlice.actions;

export default appSlice.reducer;