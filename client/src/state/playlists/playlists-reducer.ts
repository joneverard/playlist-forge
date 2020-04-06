import { combineReducers } from "redux";

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
    default:
      return state;
  }
}

export interface PlaylistStore {
  selectedPlaylist: any;
  playlists: any;
}
