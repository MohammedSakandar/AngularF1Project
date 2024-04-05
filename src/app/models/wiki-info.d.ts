export interface WikiResponse {
  batchcomplete: string
  query: Query
}

export interface Query {
  pages: Pages
}

export interface Pages {
  "675561": N675561
}

export interface N675561 {
  pageid: number
  ns: number
  title: string
  thumbnail: Thumbnail
  pageimage: string
}

export interface Thumbnail {
  source: string
  width: number
  height: number
}
