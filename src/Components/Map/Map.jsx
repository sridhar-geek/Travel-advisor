// import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { paper, typography, useMediaQuery } from "@material-ui/core"
import Rating from '@material-ui/lab'

import styles from "./styles"


const Map = ( { setCoordinates, setBounds, coordinates} ) => {

  const classes = styles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
        <div className = {classes.mapContainer}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyBwpxACVvrR_9rDpgtI1Ps423iHnkpaCXI'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={10}
            margin={ [50, 50, 50, 50] }
            options={''}
            onChange={ (e) => {
                setCoordinates( { lat:e.center.lat, lng:e.center.lng});
                setBounds( { ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={''}
          >

          </GoogleMapReact>
        </div>
  )
}

export default Map;