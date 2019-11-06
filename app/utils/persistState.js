const user_state = 'user-state';
const vendor_state = 'vendor-state';
const user_id = 'user_id';

//that will load state from storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(user_state);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return null;
  }
};
export const userState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(user_id, serializedState);
  } catch (error) {
    return false;
  }
};
export const clearUserState = state => {
  try {
    localStorage.removeItem(user_id);
    return true;
  } catch (error) {
    return false;
  }
};

export const authToken = () => {
  try {
    const serializedState = localStorage.getItem(user_state);
    if (serializedState === null) {
      return null;
    }
    const user = JSON.parse(serializedState);
    return user.data.token;
  } catch (error) {
    return null;
  }
};

// @param {Object} state to be stored.

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(user_state, serializedState);
  } catch (error) {
    return false;
  }
};
export const saveVendorState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(vendor_state, serializedState);
  } catch (error) {
    return false;
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(user_state);
    localStorage.removeItem(vendor_state);
    return true;
  } catch (error) {
    return false;
  }
};
