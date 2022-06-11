import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';


export const Header = ({setMode,mode}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
      setChecked(event.target.checked);
      setMode((prev)=>prev==='dark'?'light':'dark');
  };
  return (
    <header className="header">
      <Grid container sx={{width: '100%',backgroundColor: 'background.default'}}>
        <Grid item xs={11} >
            <Typography  
                sx={{
                    textAlign: 'left',
                    marginLeft: 2
                }}
                variant="h3" 
                color='text.primary' 
                my={2}
                >
                BLOG DIFRACTIVO
            </Typography>
            
        </Grid>  
        <Grid item xs={1} sx={{textAlign: 'right'}}>
        <Tooltip title={mode==='dark'?'Cambiar a Modo Día':'Cambiar a Modo Noche'}>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Tooltip>

        </Grid>        
    </Grid>
    </header>
  )
}
