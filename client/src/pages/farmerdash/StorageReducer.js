export default (state, action) => {
  switch (action.type) {
    case "ADD_CROP":
      return [...state, action.payload];

    default:
      return state;
  }
};
