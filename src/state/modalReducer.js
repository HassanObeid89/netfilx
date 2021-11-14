export default function showReducer(state, action) {
    switch (action.type) {
      case "SET_MODAL":
        return setModal(state, action);
      default:
        throw new Error("no action type found");
    }
  
    function setModal(state, action) {
      const { payload } = action;
      if (payload !== null) return  payload;
      return state;
    }
  }
  