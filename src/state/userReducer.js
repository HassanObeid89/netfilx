export default function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return setUser(state, action);
    default:
      throw new Error("no action type found");
  }

  function setUser(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }
}
