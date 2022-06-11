import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import { ArticleContext } from '../Articles/articlesContext';
import { useNavigate } from "react-router-dom";




export const CartaArticulo = ({articulo}) => {

    const contextArticulo = useContext(ArticleContext);
    const navigate = useNavigate();   

    const handleSelection = (articulo)=>{

        const action = {
            type: 'added',
            payload: {
                selected: true,
                article: articulo
            }
        } 
        contextArticulo.dispatch(action);
        navigate("/articulo");
    }

  return (
    <Fade in={true}>
    <Card  variant="outlined"  sx={{ boxShadow: 4,borderRadius: 2, maxWidth: '100%', marginBottom: 1 }}>
        <CardContent>
            <Link onClick={()=>handleSelection(articulo)} underline="hover">
                <Typography  variant="h5" component="div">
                    {articulo.titulo}
                </Typography>
            </Link>
            <Typography  variant="body2">
               {articulo.autores.toString()}
            </Typography>
            <Typography sx={{ fontSize: 14,mb: -0.5 }} color="text.secondary" gutterBottom>
               Revista BISTUA {`Vol. ${articulo.vol} num ${articulo.num}. Año ${articulo.year}`}
            </Typography>

            <Typography sx={{ mb: -2 }} color="text.secondary">
               {(articulo.keywordsVect).toString()}
            </Typography>

            </CardContent>
            <CardActions>
            <Box>
                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                    <Button size="small">Agregar a Favoritos</Button>
                    <Button size="small">Citar</Button>
                    <Button size="small">Articulos Relacionados</Button>
                </ButtonGroup>
            </Box>
        </CardActions>
    </Card>
    </Fade>
  )
}