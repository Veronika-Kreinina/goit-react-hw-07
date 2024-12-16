import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
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

export const selectContacts = (state) => state.contacts.item;
export const selectIsLoadind = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectContactsFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export const { changeFilter } = slice.actions;

export default slice.reducer;
