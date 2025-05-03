import { SpotifyExternalUrls } from "./Track";
import { SpotifyTrack } from "./Track";
import { SpotifyImage } from "./Track";
interface SpotifyUser {
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    type: "user";
    uri: string;
    display_name: string;
  }
  
  interface SpotifyPlaylistTrackItem {
    added_at: string;
    added_by: SpotifyUser;
    is_local: boolean;
    track: SpotifyTrack;
  }
  
  interface SpotifyPlaylistTracks {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: SpotifyPlaylistTrackItem[];
  }
  
  interface SpotifyPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyUser;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
  }
  