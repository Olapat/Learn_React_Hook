export const initialStateEmployee = [];

function employeeReducer(state, action) {
  switch (action.type) {
    case 'create':
      return [
        ...state,
        action.payload
      ];
    case 'delete':
      state.splice(action.index, 1);
      return state
    default:
      throw new Error();
  }
}

export default employeeReducer

