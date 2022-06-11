import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export const Footer = () => {
  return (
    <footer className='footer'>
    <Box sx={{ height: '100%' ,margin: 0,padding: 0,bgcolor: 'background.paper'}}>
      <Typography  
          sx={{
              textAlign: 'center',
              //position: 'absolute',
              paddingTop: 3
          }}
          variant="body2" 
          color='action.disabledBackground' 
          my={1}
          mx={1}
          >Desarrollado por Roberto Cuellar 2022. <br/>
          Información tomada de la revista BISTUA
      </Typography>
      </Box>
    </footer>
  )
}
