export const ADD_TRACKS = "ADD_TRACKS";

const defaultState = { tracks: [] };

export function savedItems(state: any = defaultState, action: any) {
  switch (action.type) {
    case ADD_TRACKS:
      // reset the selected status
      const tracks = action.payload.map((track) => ({
        ...track,
        selected: false,
      }));
      return { ...state, tracks: [...state.tracks, ...tracks] };
    default:
      return state;
  }
}
