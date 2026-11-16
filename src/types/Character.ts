// Shape returned by https://rickandmortyapi.com/api/character
export interface ApiCharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface ApiCharacterResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: ApiCharacter[]
}

// Shape used inside the app
export interface Character {
  id: number
  image: string
  name: string
  status: string
  species: string
  gender: string
  origin: string
  location: string
  episodes: number
}

export const adaptCharacter = (c: ApiCharacter): Character => ({
  id: c.id,
  image: c.image,
  name: c.name,
  status: c.status,
  species: c.species,
  gender: c.gender,
  origin: c.origin.name,
  location: c.location.name,
  episodes: c.episode.length,
})
