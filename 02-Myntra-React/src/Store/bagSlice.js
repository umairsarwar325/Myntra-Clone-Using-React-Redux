import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      } else {
        return state.filter((id) => id !== action.payload);
      }
    },
    removeFromBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
