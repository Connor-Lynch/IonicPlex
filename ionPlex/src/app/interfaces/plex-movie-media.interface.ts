import { PlexMovieMediaPart } from "./plex-movie-media-part.interface";

export interface PlexMovieMedia {
  Part: PlexMovieMediaPart[],
  aspectRatio: number,
  audioChannels: number,
  audioCodec: string,
  bitrate: number,
  container: string,
  duration: number,
  height: number,
  id: number,
  videoCodec: string,
  videoFrameRate: string,
  videoResolution: string,
  width: number
}
