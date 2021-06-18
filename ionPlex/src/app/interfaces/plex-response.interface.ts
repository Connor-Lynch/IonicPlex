import { PlexMovie } from "./plex-movie.interface";

export interface PlexResonse {
  MediaContainer : {
    Metadata: PlexMovie[]
    allowSync : boolean,
    art: string,
    identifier: string,
    librarySectionID: number,
    librarySectionTitle: string,
    librarySectionUUID: string,
    mediaTagPrefix: string,
    mediaTagVersion: number,
    size: number,
    thumb: string,
    title1: string,
    title2: string,
    viewGroup: string,
    viewMode: number
  }
}
