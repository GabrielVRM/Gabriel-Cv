import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Header = () => {
  return (
    <AppBar position='sticky' color='inherit'>
      <Container maxWidth='xs'>
        <Toolbar disableGutters>
      
          <Typography
            sx={{
              margin: '20px',
              display: { xs: 'none', md: 'flex' },
              fontSize: '20px',
              fontFamily: 'Raleway',
              fontWeight: 500,
              letterSpacing: '10px',
              color: 'inherit',
              textAlign: 'center'
            }}
          >
            Gabriel Vieira Reis Maximo
          </Typography>
          

          <Typography
            sx={{
              mr: 2,
              margin: '40px',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontSize: '17px',
              fontFamily: 'Raleway',
              fontWeight: 800,
              letterSpacing: '10px',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Gabriel Vieira Reis
          </Typography>
          

          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
