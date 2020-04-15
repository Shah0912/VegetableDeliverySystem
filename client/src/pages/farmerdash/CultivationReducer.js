export default (state, action) => {
  switch (action.type) {
    case "GET_CROPS":
      return [...state, action.payload];

    case "ADD_CROP":
      return [...state, action.payload];

    case "MOVE_CROP":
      const newState = state.filter((crop) => crop.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
