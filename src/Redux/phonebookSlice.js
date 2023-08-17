import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState/phonebookInitialState';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk';
import { handleFulfilled, handleFulfilledAdd, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected } from 'components/services/services';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};


export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          addContactsThunk[STATUS.PENDING],
          deleteContactsThunk[STATUS.PENDING],
          getContactsThunk[STATUS.PENDING]
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          addContactsThunk[STATUS.REJECTED],
          deleteContactsThunk[STATUS.REJECTED],
          getContactsThunk[STATUS.REJECTED]
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          addContactsThunk[STATUS.FULFILLED],
          deleteContactsThunk[STATUS.FULFILLED],
          getContactsThunk[STATUS.FULFILLED]
        ),
        handleFulfilled
      );
  },

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
