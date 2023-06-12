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