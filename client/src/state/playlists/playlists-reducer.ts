import { combineReducers } from "redux";

export const SET_SELECTED_PLAYLIST = "SET_SELECTED_PLAYLIST";

function playlists(state: any = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

function selectedPlaylist(state: any = {}, action: any) {
  switch (action.type) {
    case "SET_SELECTED_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ playlists, selectedPlaylist });
