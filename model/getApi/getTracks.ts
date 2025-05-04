import { ResponseSpotifyTracks } from "../Track";
import { SpotifyTrack } from "../Track";
export async function getTracks(query:String):Promise<ResponseSpotifyTracks|null> {
    try {
      const response = await fetch(`http:///spotify/Tracks?ids=${encodeURIComponent(query.toString())}`);
      
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

  export async function getTrack(query:String):Promise<SpotifyTrack|null>{
    try {
      const response = await fetch(`http:// 192.168.224.61:3000/spotify/Track?id=${encodeURIComponent(query.toString())}`);
      
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


