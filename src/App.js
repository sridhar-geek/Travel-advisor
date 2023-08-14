import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
//cssBaseline is take care the margin, boder, paddings and automate them
// grid provides responsive designs and adopt to different screen sizes

      // Components Imports
 import Header from './Components/Header/Header'
 import List from './Components/List/List'
 import Map from './Components/Map/Map'

        // Api imports
  import  { placesData } from './api/index'

const App = () => {
  
  const [ places, setPlaces ] = useState([])

  const [coordiantes, setCoordiantes] = useState ( {} )
  const [bounds, setBounds] = useState(null)

  useEffect ( () => {
    navigator.geolocation.getCurrentPosition( ( { coords : { latitude, longitude } } )=> {
      setCoordiantes( { lat: latitude, lng: longitude})
    } )
  }, [])

    useEffect( () => {
        placesData(  )
          .then( (data) => {
            // console.log(data)
            setPlaces(data)
          });
    }, [coordiantes, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing = {3} style = {{ width: '100%' }}  >
          <Grid item xs = {12} md = {5} >      {/* this render the list full screen in small device & 1/3 in medium and large devices */}
                <List 
                places = {places} />
          </Grid>
          <Grid item xs = {12} md = {7} >
                <Map
                  setBounds = {setBounds}
                  setCoordiantes = {setCoordiantes} 
                  coordiantes = {coordiantes}
                />
          </Grid>
      </Grid>
    </>
  )
}

export default App;


/** 
 * material ui comes with pre built components 
 * we need to import and custmize by sending inline styles and props
 */

/*
 * Use effect hook is used to retriew data from api call and pass to useState hook 
 * which is State of this component which renders every time when components renders
 * destrucing array is used with useEffect hook which helps to render the content only for the first time
 */