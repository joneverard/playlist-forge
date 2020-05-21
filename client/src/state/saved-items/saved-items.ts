export const ADD_TRACKS = "ADD_TRACKS";

export function savedItems(state: any = [], action: any) {
  switch (action.type) {
    case ADD_TRACKS:
      return [...state, action.payload];
    default:
      return state;
  }
}
