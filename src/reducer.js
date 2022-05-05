let lastId = 0;

function reducer(state = { initialState }, action) {
  if (action.type === "bugAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
    elseif(action.type === "bugResolved");
    return state.filter((bug) => bug.id !== action.payload.id);
  }
  return state;
}
