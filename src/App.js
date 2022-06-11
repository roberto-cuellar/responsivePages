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


const initialState = {
    selected: false,
    article: []
}

const articuloEstadoInit = () =>{
  return !localStorage.getItem('articuloSeleccionado')&& localStorage.setItem('articuloSeleccionado',JSON.stringify(initialState));
  // return {
  //   selected: false,
  //   article: []
  // }
}
// const articuloEstadoInit = {
//   selected: false,
//   article: []
// }

export const App = () => {
  
  const [articuloEstado, dispatch] = useReducer(articuloReducer, [], articuloEstadoInit)

  // const [articuloEstado,setArticuloEstado] = useState(articuloEstadoInit);

  return (
    <ArticleContext.Provider value={{articuloEstado,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/articulo" element={<ArticleScreen />} />        
        </Routes>
    </BrowserRouter>
  </ArticleContext.Provider>
  )
}







