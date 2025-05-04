import { ResponseSpotifyArtist } from "../Artist";
import { SpotifyArtist } from "../Artist";
export async function getArtists(query:String):Promise<ResponseSpotifyArtist|null> {
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/Artists?ids=${encodeURIComponent(query.toString())}`);
      
      if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
      }
  
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch Tracks:", error);
      return null;
    }
  }

  export async function getArtist(query:String):Promise<SpotifyArtist|null> {
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/Artist?q=${encodeURIComponent(query.toString())}`);
      
      if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
      }
  
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch Tracks:", error);
      return null;
    }
  }




