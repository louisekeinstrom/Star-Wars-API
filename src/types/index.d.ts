export type SearchHit = {
    id: number
    created_at: string
    name: string
}

export type SearchResponse = {
    hits: PeopleType[]
    nbHits: number
    page: number
    nbPages: number
    hitsPerPage: number
}

export type PeopleType = {
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
    homeworld: [{
        id: number
        name: string
    }]

}

export type PagesPeople = {
    current_page: number
    people_type: PeopleType

}

// copying res from postman on https://swapi.thehiveresistance.com/api/people
export type ResultPeople = {
    current_page: number
    data: PeopleType[]
    first_page_url: string
}