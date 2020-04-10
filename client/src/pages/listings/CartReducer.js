export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "DELETE_FROM_CART":
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      return newState;

    default:
      return state;
  }
};