import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "components/services/phonebookApi";

export const getContactsThunk = createAsyncThunk('contacts/get', () => getContacts())

export const addContactsThunk = createAsyncThunk('contacts/add', (data) =>
  addContact(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/delete', (id) =>
  deleteContact(id)
);