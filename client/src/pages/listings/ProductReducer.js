export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newState = state.filter((crop) => crop.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
