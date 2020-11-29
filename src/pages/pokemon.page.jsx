import React, { useState, useEffect } from 'react'
import { Button, Link, CircularProgress, Typography } from '@material-ui/core'
import mockdata from '../mockdata'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles({
  cardText: {
    textTransform: "capitalize"
  }
})

const Pokemon = (props) => {
  const { match, history } = props
  const classes = useStyles()
  const { params } = match
  const { pokemonId } = params
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(res => {
        const { data } = res;
        setPokemon(data)
      })
      .catch(err => setPokemon(false))
  }, [pokemonId])

  const generatePokemonPage = (pokemon) => {
    const { name, id, species, height, weight, types } = pokemon
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    // const {sprites} = pokemon
    // const { front_default } = sprites

    return (
      <>
        <Typography className={classes.cardText} variant="h1">
          {`${id}. ${name}`}
        </Typography>
        <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} alt="" />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6"> Types: </Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo
          const { name } = type
          return <Typography key={name}> {`${name}`} </Typography>
        })}
      </>
    )

  }

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonPage(pokemon)}
      {pokemon === false && <Typography> Pokemon not found </Typography>}

      {
        pokemon !== undefined && (
          <Button variant="contained" onClick={() => history.push('/')}>
            back to pokedex
          </Button>
        )
      }
    </>
  )
}

export default Pokemon
