import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'

import useStyles from  './styles'     // importing css styles from styles.js file

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
              Travel Advisor
          </Typography>
          <Typography variant='h6' className={classes.title}>
              Explore New Places
          </Typography>
          <Box>
              {/* <Autocomplete> */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                          <BiSearchAlt />
                    </div>
                    <InputBase placeholder='Search...' classes={ { root: classes.inputRoot, input:classes.inputInput } } />
                </div>
              {/* </Autocomplete> */}
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header