function reducer(state, action) {
  console.log(action)
  return {
    day: action.day,
    data: action.dados ? [...action.dados] : [],
  };
}

export default reducer;
