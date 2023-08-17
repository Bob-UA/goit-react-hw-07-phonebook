export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = ({ isLoading, error }) => {
  isLoading = false;
  error = '';
};

export const handleFulfilledGet = ({ contacts }, { payload }) => {
  contacts = payload;
};

export const handleFulfilledAdd = ({ contacts }, { payload }) => {
  contacts.push(payload);
};

export const handleFulfilledDelete = ({ contacts }, { payload }) => {
  contacts = contacts.filter(el => el.id !== payload.id);
};

export const handleRejected = ({ isLoading, error }, { payload }) => {
  isLoading = false;
  error = payload;
};
