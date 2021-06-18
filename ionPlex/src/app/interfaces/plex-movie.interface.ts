import { PlexMovieMedia } from "./plex-movie-media.interface";

export interface PlexMovie {
  Media: PlexMovieMedia[],
  addedAt: number,
  art: string,
  audienceRating: number,
  audienceRatingImage: string,
  contentRating: string,
  duration: number
  guid: string,
  key: string,
  lastViewedAt: number,
  originallyAvailableAt: Date,
  primaryExtraKey: string,
  rating: number,
  ratingImage: string,
  ratingKey: string,
  studio: string,
  summary: string,
  tagline: string,
  thumb: string,
  title: string,
  type: string,
  updatedAt: string,
  viewCount: number,
  year: number
}
