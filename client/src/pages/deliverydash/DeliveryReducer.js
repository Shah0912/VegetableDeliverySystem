export default (state, action) => {
  switch (action.type) {
    case "ADD_DELIVERY":
      return [...state, action.payload];

    default:
      return state;
  }
};
