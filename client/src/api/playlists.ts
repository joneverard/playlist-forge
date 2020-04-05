import axios from "axios";

export const getPlaylists = async (): Promise<any> => {
  const { data } = await axios.get("/playlists");
  return data;
  //   return axios.get("/playlists").then(({ data }) => data);
};

export const getPlaylistTracks = async (playlistId: string): Promise<any> => {
  const { data } = await axios.get(`/playlist/${playlistId}`);
  return data;
};
