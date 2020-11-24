import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import mockdata from '../mockdata'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
  cardText: {
    textTransform: "capitalize"
  }
})

const Pokemon = (props) => {
  const classes = useStyles()
  const { match } = props
  const { params } = match
  const { pokemonId } = params
  const [pokemon, setPokemon] = useState(mockdata[`${pokemonId}`])

  const generatePokemonPage = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon
    const fullImageUrl = ``
    const { front_default } = sprites

    return (
      <Typography className={classes.cardText} variant="h1">
        {`${id}. ${name}`}
      </Typography>
    )

  }

  return <> {generatePokemonPage()} </>
}

export default Pokemon
