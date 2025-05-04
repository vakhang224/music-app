// Lấy nhiều Albums theo ids
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ResponseSpotifyAlbums, SpotifyAlbum } from "../Albums";
export async function getAlbums(ids:String):Promise<ResponseSpotifyAlbums|null> {
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/Albums?ids=${encodeURIComponent(ids.toString())}`);
      if (!response.ok) throw new Error("Lỗi khi gọi API Albums");
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch Albums:", error);
      return null;
    }
  }
  
  // Lấy Albums mới phát hành
export async function getNewRelease(token:String):Promise<ResponseSpotifyAlbums|null>{
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/Albums/newRelease?access_token=${token?.toString()}`);
      if (!response.ok) throw new Error("Lỗi khi gọi API Albums mới phát hành");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch Albums mới phát hành:", error);
      return null;
    }
  }
  
  // Lấy chi tiết 1 Album theo id
export async function getAlbum(id:String):Promise<SpotifyAlbum|null>{
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/Albums?id=${encodeURIComponent(id.toString())}`);
      if (!response.ok) throw new Error("Lỗi khi gọi API Album chi tiết");
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch Album chi tiết:", error);
      return null;
    }
  }
