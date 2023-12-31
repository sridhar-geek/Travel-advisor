// import React, { UseState } from 'react'
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'

import listStyles from './styles'
import { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ( { places}) => {

  const classes = listStyles();
  const [ type, setType ] = useState('restaurants')
  const [ rating, setRating ] = useState('')


  return (
    <div className = {classes.container}>

      <Typography variant='h4'>Restaurants Hotels & Attractions around you</Typography>
      <FormControl className = {classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value = {type} onChange={ (e) => setType(e.target.value) } >
            <MenuItem value = 'restaurants'>Restaurants</MenuItem>
            <MenuItem value = 'hotels'>Hotels</MenuItem>
            <MenuItem value = 'attractions'>Attractions</MenuItem>
          </Select>
      </FormControl>
      <FormControl className = {classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value = {rating} onChange={ (e) => setRating(e.target.value) } >
            <MenuItem value = 'value = {0}'>All</MenuItem>
            <MenuItem value = 'value = {3.0}'>Above 3.0</MenuItem>
            <MenuItem value = 'value = {4.0}'>Above 4.0</MenuItem>
            <MenuItem value = 'value = {4.5}'>Above 4.5</MenuItem>
          </Select>
      </FormControl>
      <Grid container spacing = {3} className = {classes.list}>
        {places ?.map( (place, i) => (
            <Grid item key = {i} xs = {12}>
              <PlaceDetails place = { place } />
            </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default List

