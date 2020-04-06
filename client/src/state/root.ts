import { combineReducers } from "redux";

import { playlists, selectedPlaylist } from "state/playlists/playlists-reducer";

export interface RootState {
  playlists: any;
  selectedPlaylist: any;
}

export default combineReducers<RootState>({ playlists, selectedPlaylist });
