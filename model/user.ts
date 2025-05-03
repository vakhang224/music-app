import { SpotifyExternalUrls } from "./Track";
import { SpotifyImage } from "./Track";
export interface SpotifyUserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
      filter_enabled: boolean;
      filter_locked: boolean;
    };
    external_urls: SpotifyExternalUrls;
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    images: SpotifyImage[];
    product: string; // "premium", "free", v.v.
    type: string;    // luôn là "user"
    uri: string;
  }
  