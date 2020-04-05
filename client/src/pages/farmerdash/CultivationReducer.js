export default (state, action) => {
  switch (action.type) {
    case "ADD_CROP":
      return [...state, action.payload];

    case "MOVE_CROP":
      const newState = state.filter((crop) => crop.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
