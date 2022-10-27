import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import CardImagePokemon from "../pokemon/CardImagePokemon"


interface Props {
    favoritesPokemons: number[]
}

const YesFavorites:FC<Props> = ({favoritesPokemons}) => {

  return (
    <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
        {
            favoritesPokemons.map(id => (
                <CardImagePokemon id={id} key={id}/>
            ))
        }
    </Grid.Container>
  )
}
export default YesFavorites