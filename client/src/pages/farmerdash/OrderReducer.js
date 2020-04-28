export default (state, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      //console.log(action.payload);
      return action.payload;
    case "MOVE_ORDER":
      const newState = state.filter(
        (crop) => crop.orderid !== action.payload.orderid
      );
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
