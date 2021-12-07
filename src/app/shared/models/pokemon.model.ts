class Sprites{
  back_default: string;
  front_default: string;
  back_shiny: string;
  front_shiny: string;
}

class Pokemon{
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: object;
  sprites: Sprites;
}


export default Pokemon;
