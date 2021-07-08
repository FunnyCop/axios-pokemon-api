import axios from "axios"
import React, { useEffect, useState } from "react"

import "./App.css"

const App = () => {
  const [ pokemon, setPokemon ] = useState( [] )
  const [ buttonClicked, setButtonClicked ] = useState( false )

  useEffect( () => {
      axios.get( "https://pokeapi.co/api/v2/pokemon/?limit=1118" )
        .then( response => {
          setPokemon( response.data.results.map( ( item, index ) => {
            return <p>{ item.name }</p>
          } ) )
        } )
  } )

  return (
    <div className = "App">
      <button
      className = "btn btn-outline-success btn-lg"
        onClick = { () => setButtonClicked( true ) }
      >Get Pokemon</button>
      {
        buttonClicked
          ? pokemon
          : null
      }
    </div>
  )
}

export default App
