export default function showReducer(state, action) {
  switch (action.type) {
    case "ADD_SHOW":
      return addShow(state, action);
    case "SET_SHOWS":
      return setShows(state, action);
    case "UPDATE_SHOW":
      return updateShow(state, action);
    default:
      throw new Error("no action type found");
  }

  function addShow(state, action) {
    const { payload } = action;
    if (payload !== null) return [...state, payload];
    return state;
  }

  function setShows(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }

  function updateShow(state, action) {
    const { payload } = action;
    const course = payload;
    const newState = [...state];
    const index = newState.findIndex((item) => item.id === course.id);

    newState[index] = { ...course };
    return newState;
  }
}
