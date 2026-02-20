export type Character = {
    id: number,
    name: string,
    gender: string,
    birth_year: string,
    url: string
}

export type ApiResponse = {
    next: string | null,
    results: Character[]
}