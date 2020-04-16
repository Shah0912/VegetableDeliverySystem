export default (state, action) => {
  switch (action.type) {
    case "GET_CROPS":
      //console.log(action.payload);
      return action.payload;

    case "ADD_CROP":
      console.log(...state, action.payload);
      return [...state, action.payload];

    case "MOVE_CROP":
      const newState = state.filter((crop) => crop.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
