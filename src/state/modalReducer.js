export default function modalReducer(state, action) {
  switch (action.type) {
    case "SET_MODAL":
      return setModal(state, action);
    default:
      throw new Error("no action type found");
  }

  function setModal(state, action) {
    const { payload } = action;
    return payload;
  }
}
