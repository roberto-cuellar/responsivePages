import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { ArticleContext } from '../Articles/articlesContext';
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Main } from '../components/main/Main'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sidebar/SideBar'
import { Navigate } from "react-router-dom";


export const ArticleScreen = () => {
  
  const contextArticulo = useContext(ArticleContext);
  const articulo = JSON.parse(localStorage.getItem('articuloSeleccionado'));
  let retornar = false;
  if(articulo){
    if(articulo.selected){
      retornar = true;
    } 
  }

  return (
    <>
    {
      !retornar? <Navigate to="/"  />: <>
          <Header />
          <Navbar />
          <Main />
          <SideBar />
          <Footer />
      </>
    }           
   </>
  )
}
