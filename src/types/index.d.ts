export type SearchHit = {
    id: number
    created_at: string
    title: string
    url: string
}

export type SearchResponse = {
    hits: SearchHit[]
    nbHits: number
    page: number
    nbPages: number
    hitsPerPage: number
}

export type RenderPeople = {
    id: number
    name: string
    birth_year: string
    eye_color: string
    hair_color: string
    height: string
    mass: string
    skin_color: string
    created: string
    edited: string
    films_count: number
    species_count: number
    starships_count: number
    vehicles_count: number

}