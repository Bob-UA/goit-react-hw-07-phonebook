import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState/phonebookInitialState';
import { getContacts } from 'components/services/phonebookApi';
import { getContactsThunk } from './thunk';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, (state) => {
      state.isLoading = true
      })
      .addCase(getContactsThunk.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.contacts = payload
      state.error = ''
      })
      .addCase(getContactsThunk.rejected, (state, {payload}) => {
        state.isLoading = false
        state.error = payload
      })
  }
  
  
  // reducers: {
  //   addContact: (state, action) => {
  //   state.contacts = [...state.contacts, action.payload];
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts = action.payload
  //   },
  //   changeFilter: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
});

export const { addContact, changeFilter, deleteContact } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
