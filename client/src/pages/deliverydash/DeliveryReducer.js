export default (state, action) => {
  switch (action.type) {
    case "ADD_DELIVERY":
      return [...state, action.payload];
    case "GET_DELIVERIES":
      return action.payload;
    case "IS_DELIVERED":
      const newState = state.filter(
        (crop) => crop.cropname !== action.payload.cropname
      );
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
