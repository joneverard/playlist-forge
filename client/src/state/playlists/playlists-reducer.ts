export const SET_SELECTED_PLAYLIST = "SET_SELECTED_PLAYLIST";

export function playlists(state: any = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export function selectedPlaylist(state: any = {}, action: any) {
  switch (action.type) {
    case "SET_SELECTED_PLAYLIST":
      return action.payload;
    case "SELECT_TRACK":
      // find the track.
      // TODO - move this logic to a map if it is not performant enough.
      const newState = { ...state };
      const track = newState.tracks.items.find(
        (item: any) => item.track.id === action.payload.id
      );
      track.selected = !track.selected;
      return newState;
    default:
      return state;
  }
}

export interface PlaylistStore {
  selectedPlaylist: any;
  playlists: any;
}
