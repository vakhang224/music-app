import { ResponseQuery } from "../ResponeQuery";

export async function getQuery(query:String):Promise<ResponseQuery|null> {
    try {
      const response = await fetch(`http://192.168.1.11:3000/spotify/search?q=${encodeURIComponent(query.toString())}`);

      if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Lỗi khi fetch album:", error);
      return null;
    }
  }


