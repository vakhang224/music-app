export interface SpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    url: string;
    height: number|null;
    width: number|null;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ResponseSpotifyArtist{
  Artists:SpotifyArtist[],
}

