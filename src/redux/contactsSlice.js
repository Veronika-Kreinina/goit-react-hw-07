import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

export const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const sliceContacts = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.contacts.loading = false;
        }
        // (state) => {
        //   state.contacts.error = null;
        // }
      );
  },
});

export const selectContacts = (state) => state.contacts.item;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContactsFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export default sliceContacts.reducer;

//  створи та експортуй мемоізований селектор selectFilteredContacts за допомогою функції createSelector.
// Селектор повинен залежати від поточних масиву контактів і значення фільтра, та повертати відфільтрований масив контактів.
// Селектор selectFilteredContacts імпортується у компонент списка контактів ContactList.jsx та використовується у useSelector.
``;
