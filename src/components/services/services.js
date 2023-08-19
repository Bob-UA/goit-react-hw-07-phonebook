export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = ( state, { payload }) => {
  state.contacts = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.push(payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.contacts = state.contacts.filter(el => el.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
