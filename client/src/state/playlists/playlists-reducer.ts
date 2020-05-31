import { get, pick } from "lodash";

export const SET_SELECTED_PLAYLIST = "SET_SELECTED_PLAYLIST";
export const SELECT_ALL = "SELECT_ALL";
export const DESELECT_ALL = "DESELECT_ALL";
export const SELECT_TRACK = "SELECT_TRACK";

export function playlists(state: any = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export function selectedPlaylist(state: any = {}, action: any) {
  // will return the playlist type.
  const items = get(state, "tracks.items", []);
  switch (action.type) {
    case SET_SELECTED_PLAYLIST:
      return action.payload;
    case SELECT_TRACK:
      const newState = { ...state };
      const track = newState.tracks.items.find(
        (item: any) => item.id === action.payload.id
      );
      track.selected = !track.selected;
      return newState;
    case SELECT_ALL:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          items: items.map(track => ({ ...track, selected: true })),
        },
      };
    case DESELECT_ALL:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          items: items.map(track => ({ ...track, selected: false })),
        },
      };
    default:
      return state;
  }
}

export interface PlaylistStore {
  selectedPlaylist: any;
  playlists: any;
}
