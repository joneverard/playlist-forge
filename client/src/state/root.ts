import { combineReducers } from "redux";

import { playlists, selectedPlaylist } from "state/playlists/playlists-reducer";
import { savedItems } from "state/saved-items/saved-items";
export interface RootState {
  playlists: any;
  selectedPlaylist: any;
  savedItems: any;
}

export default combineReducers<RootState>({
  playlists,
  selectedPlaylist,
  savedItems,
});
