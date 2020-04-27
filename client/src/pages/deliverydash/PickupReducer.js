export default (state, action) => {
  switch (action.type) {
    case "ADD_PICKUP":
      return [...state, action.payload];

    case "GET_PICKUP":
      return action.payload;

    case "IS_PICKEDUP":
      const newState = state.filter(
        (crop) => crop.cropname !== action.payload.cropname
      );
      console.log(newState);
      return newState;

    default:
      return state;
  }
};
