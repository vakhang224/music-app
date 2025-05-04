interface SpotifyIcon {
    url: string;
    height: number;
    width: number;
  }
  
  interface SpotifyCategory {
    href: string;
    icons: SpotifyIcon[];
    id: string;
    name: string;
  }
  
export interface SpotifyCategories {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: SpotifyCategory[];
  }
  
  interface SpotifyCategoriesResponse {
    categories: SpotifyCategories;
  }
  