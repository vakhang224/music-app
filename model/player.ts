import { SpotifyTrack } from "./Track";
import { SpotifyExternalUrls } from "./Track";
interface SpotifyDevice {
    id: string | null;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
  }
  
  interface SpotifyContext {
    type: string;
    href: string;
    external_urls: SpotifyExternalUrls;
    uri: string;
  }
  
  interface SpotifyActions {
    interrupting_playback: boolean;
    pausing: boolean;
    resuming: boolean;
    seeking: boolean;
    skipping_next: boolean;
    skipping_prev: boolean;
    toggling_repeat_context: boolean;
    toggling_shuffle: boolean;
    toggling_repeat_track: boolean;
    transferring_playback: boolean;
  }
  
 export interface SpotifyPlaybackState {
    device: SpotifyDevice;
    repeat_state: string;
    shuffle_state: boolean;
    context: SpotifyContext;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
    item: SpotifyTrack;
    currently_playing_type: string;
    actions: SpotifyActions;
  }
  