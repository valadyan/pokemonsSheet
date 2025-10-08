export interface ICard {
    name: string,
    url: string
}

export interface IPageResponse {
    result: ICard[]
}

export interface IPokemon {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: true,
  order: number,
  weight: number,
  sprites: {
    other: {
      home: {
        front_default: string
        front_female: string,
        front_shiny: string
        front_shiny_female: string
      },
      "official-artwork": {
        front_default: string
        front_shiny: string
      }
    }
  }
}