import React, { useContext,useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { ArticleContext } from '../../Articles/articlesContext'; 
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
  };

export const MainArticulo = () => {
    //const articulo = useContext(articuloS);
    const contextArticulo = useContext(ArticleContext);
    const articulo = JSON.parse(localStorage.getItem('articuloSeleccionado')).article;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <>
        <Grid container sx={{backgroundColor: 'background.default',padding: 1,height: '100%',padding: 2}}>
            <Grid item xs={12} md={6}>
                <Typography  
                sx={{
                    textAlign: 'justify',
                }}
                variant="h4" 
                color='text.primary' 
                my={1}
                >{articulo.titulo}
            </Typography>
                    <Link href={'https://ojs.unipamplona.edu.co/ojsviceinves/index.php/bistua/'} target="_blank" underline="hover">
                        <Typography sx={{ fontSize: 14,textAlign: 'left' }} gutterBottom>
                                BISTUA {`Vol. ${articulo.vol} num ${articulo.num}. Año ${articulo.year}`}
                        </Typography>
                    </Link>
                        <Typography  
                            sx={{
                                textAlign: 'left',
                            }}
                            variant="h5" 
                            color='text.primary' 
                            my={1}
                            >Resumen:
                        </Typography>
                        <Typography sx={{ mb: 1.5,textAlign: 'justify' }} color="text.secondary" >
                            {(articulo.resumen).toString().slice(0,1000)}...<Button onClick={handleOpen}>Ver todo</Button>
                    </Typography>
                    <Link href={articulo.linkPdf} target="_blank" underline="none"> 
                        <Button size='large' variant='outlined'>DESCARGAR</Button>
                    </Link>    
                    <Typography  
                            sx={{
                                textAlign: 'left',
                            }}
                            variant="h6" 
                            color='text.primary' 
                            my={1}
                            >Cómo citar :{
                                <Tooltip title='Más formatos de citación'>
                                    <IconButton>
                                        <FormatQuoteIcon color='secondary'/>
                                    </IconButton>
                                </Tooltip>}
                    </Typography>  
                    <Typography variant="body2" sx={{ mb: 1.5,textAlign: 'justify' }} color="text.secondary" >
                            {articulo.citaStd}
                    </Typography>
                

            </Grid>
            <Grid className='columnaArticulo' item xs={12} md={6} sx={{paddingLeft: 1,paddingTop: 3}}>
                <Box
                    component="img"
                    sx={{
                    height: 400,
                    borderRadius: 4,
                    boxShadow: 4
                    //width: 350,
                    // maxHeight: 400,
                    // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="article image."
                    src={articulo.linkImg}      
                />
                <Box
                    sx={{
                    width: '100%',
                    }}
                >
                    <Typography  
                                sx={{
                                    textAlign: 'center',
                                }}
                                variant="h6" 
                                color='text.primary' 
                                my={1}
                                >Autores</Typography>
                    <>
                    
                    {articulo.autores.map((autor,index)=>(
                        <Box key={autor+index}>
                            <Typography  variant="body2" sx={{ mb: 0.0,textAlign: 'center' }} color="text.secondary" >{autor}</Typography>
                            <Typography variant="body2" sx={{ mb: 0.5,fontWeight: 700 }} color="text.secondary" >{articulo.afiliacion[index]}</Typography>
                        </Box>
                        
                        ))}
                    
                    </>
                    <Typography  
                                sx={{
                                    textAlign: 'center',
                                }}
                                variant="h6" 
                                color='text.primary' 
                                my={1}
                    >Palabras Clave</Typography>
                    <Typography variant="body2" sx={{ mb: 0.0,textAlign: 'center' }} color="text.secondary" > {(articulo.keywordsVect).toString()}</Typography>

                </Box>
            </Grid>
        </Grid>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            
            }}
            
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" color="text.primary">
                Resumen:
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }} color="text.secondary">
                {articulo.resumen}
                </Typography>
            </Box>
            </Fade>
        </Modal>
    </>
  )
}
