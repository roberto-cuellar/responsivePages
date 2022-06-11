import React, { useReducer, useState } from 'react'
import { ArticleScreen } from './Screens/ArticleScreen';
import { MainScreen } from './Screens/MainScreen';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ArticleContext } from './Articles/articlesContext';
import { articuloReducer } from './Articles/articuloReducer';
import { useTheme,ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';




const initialState = {
    selected: false,
    article: []
}

const articuloEstadoInit = () =>{
  return !localStorage.getItem('articuloSeleccionado')&& localStorage.setItem('articuloSeleccionado',JSON.stringify(initialState));
}

export const App = () => {
  const [mode, setMode] = React.useState('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const [articuloEstado, dispatch] = useReducer(articuloReducer, [], articuloEstadoInit)

  // const [articuloEstado,setArticuloEstado] = useState(articuloEstadoInit);

  return (
    <ArticleContext.Provider value={{articuloEstado,dispatch}}>
      <ThemeProvider theme={theme}>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen setMode={setMode} mode={mode}/>} />
            <Route path="/articulo" element={<ArticleScreen setMode={setMode} mode={mode} />} />        
          </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
  </ArticleContext.Provider>
  )
}







