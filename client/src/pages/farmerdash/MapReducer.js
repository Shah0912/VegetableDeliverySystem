export default (state, action) => {
  switch (action.type) {
    case "GET_CROPS":
      //console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
