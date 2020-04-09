export default (state, action) => {
  switch (action.type) {
    case "ADD_PICKUP":
      return [...state, action.payload];

    case "IS_PICKEDUP":
      const newState = state.filter((crop) => crop.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
