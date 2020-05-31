export interface Track {
  name: string;
  id: string;
  album: {
    images: Array<{
      url: string;
    }>;
  };
  artists: Array<{
    name: string;
    id: string;
  }>;
  explicit: boolean;
  selected: boolean;
}
