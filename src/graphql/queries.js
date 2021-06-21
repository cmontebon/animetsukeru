import { gql } from '@apollo/client';

export const GET_SERIES_PAGE_BY_ID = gql
`query ($id: Int!, $type: MediaType) {
    Media(id: $id, type: $type) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      coverImage {
        large
        medium
      }
      bannerImage
      format
      type
      status
      episodes
      chapters
      volumes
      season
      description
      averageScore
      meanScore
      genres
      synonyms
      hashtag
      source
      isAdult
      isFavourite
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      characters (perPage: 18, sort: [ROLE]) {
        edges {
          node {
            id
            name {
              first
              last
            }
            image {
              medium
              large
            }
          }
          role
          voiceActors (language: JAPANESE) {
            id
            name {
              first
              last
              native
            }
            image {
              medium
              large
            }
            language
          }
        }
      }
    }
  }`


export const SEARCH_QUERY = gql`
query ($query: String, $type: MediaType) {
  Page {
    media(search: $query, type: $type) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
}`;