export type SearchHit = {
    id: number
    created_at: string
    name: string
}

export type SearchResponse = {
    hits: PeopleType
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
    homeworld: ModelType
}

export type PeopleTypes = PeopleType[]

export type PagesPeople = {
    current_page: number
    people_type: PeopleType

}

export type LinkType = {
    url: string | null
    label: string
    active: boolean
}

// copying res from postman on https://swapi.thehiveresistance.com/api/people
export type PeopleResponse = {
    current_page: number
    data: PeopleTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

// FILMS
export type FilmResponse = {
    current_page: number
    data: FilmTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export type FilmResponses = FilmResponse[]

export type FilmType = {
    id: number
    title: string
    episode_id: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    created: string
    edited: string
    characters_count: number
    planets_count: number
    starships_count: number
    vehicles_count: number
    species_count:number
}

export type FilmTypes = FilmType[]

export type LinkType = {
    url: string | null
    label: string
    active: boolean
}

export type LinkTypes = LinkType[]

export type OneFilmResponse = {
    id: number
    title: string
    episode_id: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    created: string
    edited: string
    characters: ModelTypes
    planets: ModelTypes
    starships: ModelTypes
    vehicles: ModelTypes
    species: ModelTypes
}

// PLANETS
export type PlanetResponse = {
    current_page: number
    data: PlanetTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export type PlanetType = {
    id: number
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    created: string
    edited: string
    residents_count: number
    films_count: number
}

export type PlanetTypes = PlanetType[]

// SPECIES

export type SpeciesResponse = {
    current_page: number
    data: SpeciesTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export type SpeciesType = {
    id: number
    name: string
    classification: string
    designation: string
    average_height: string
    average_lifespan: string
    eye_colors: string
    hair_colors: string
    skin_colors: string
    language: string
    created: string
    edited: string
    people_count: number
    films_count: number
    homeworld: ModelType | null
}

export type SpeciesTypes = SpeciesType[]

//  VEHICLES
export type VehiclesResponse = {
    current_page: number
    data: VehiclesTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export type VehiclesType = {
    id: number
    name: string
    model: string
    vehicle_class: string
    manufacturer: string
    length: string
    cost_in_credits: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    cargo_capacity: string
    consumables: string
    created: number
    edited: number
    pilots_count: number
    films_count: number
}

export type VehiclesTypes = VehiclesType[]

// STARSHIPS
export type StarshipsResponse = {
    current_page: number
    data: StarshipsTypes
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: LinkTypes
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export type StarshipsType = {
    id: number
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    created: number
    edited: number
    pilots_count: number
    films_count: number
}

export type StarshipsTypes = StarshipsType[]

export type ModelType = {
    id: number
    name: string | null
}

export type ModelTypes = ModelType[]