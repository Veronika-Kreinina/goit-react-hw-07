import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectFilters = (state) => state.filters.name;

export const { filterContacts } = slice.actions;
export default slice.reducer;
