export const getNodes = key => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.log('Something went wrong while getting all nodes!');
    throw error;
  }
};

export const saveOrUpdateNode = (key, userData) => {
  try {
    localStorage.setItem(key, JSON.stringify(userData));
  } catch (error) {
    console.log('Something went wrong while saving new node!');
    throw error;
  }
};
