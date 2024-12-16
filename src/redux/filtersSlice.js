import { createSlice } from "@reduxjs/toolkit";

const sliceFilters = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = sliceFilters.actions;

export default sliceFilters.reducer;
