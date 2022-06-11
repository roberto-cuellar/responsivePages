import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { ArticulosComponente } from '../ArticulosComponente';

export const MainGeneral = () => {
    const [descripcion,setDescripcion] = useState(""); /// Estado para almacenar la palabra a buscar
    const [resultados,setResultados] = useState([]);
    const [inicioArticulo,setInicio] = useState(1);
    const articulosPorPagina = 7;
    const conteoArticulos = Math.ceil(resultados.length/articulosPorPagina); /// Se redondea por esceso para obtener las páginas en las que caben los artículos encontrados
    

    const handleChange = (e) =>{/// Verificar los cambios en el input
        setDescripcion(e.target.value);        //filterData(descripcion);
    }

    const handlePagination = (event, value) => {
        setInicio(value);
    };
  return (
    <Box sx={{ margin: 0,padding: 2,backgroundColor: 'background.default'}}>
        <TextField 
                id="outlined-basic" 
                label="Buscar en la base de datos" 
                variant="outlined" 
                value={descripcion}
                onChange={handleChange}
                autoComplete = 'off'
                />
        <Typography  
            sx={{
                textAlign: 'left',
            }}
            variant="h4" 
            color='text.primary' 
            my={1}
            >{descripcion.length===0?'Artículos Destacados':'Resultados de la Busqueda'}
        </Typography>
        <ArticulosComponente inicioArticulo={inicioArticulo} setInicio={setInicio} setResultados={setResultados} resultados={resultados} keyword={descripcion} descripcion={descripcion} articulosPorPagina={articulosPorPagina}/>            
        {resultados.length>articulosPorPagina &&<Pagination count={parseInt(conteoArticulos)} defaultPage={1} page={inicioArticulo} onChange={handlePagination}/>}
    </Box>
  )
}
