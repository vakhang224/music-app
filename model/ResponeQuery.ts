import { SpotifyAlbum } from "./Albums"
import { SpotifyTrack } from "./Track"
import { SpotifyArtist } from "./Artist"
export interface ResponseQuery{
    albums:SpotifyAlbum[],
    tracks:SpotifyTrack[],
    artists:SpotifyArtist[]
}