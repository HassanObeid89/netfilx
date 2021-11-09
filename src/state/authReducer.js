export default function authReducer(state, action) {
  switch (action.type) {
    case "SET_UID":
      return setUid(state, action);
    default:
      throw new Error("no action type found");
  }

  function setUid(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }
}
