import React from 'react'
import { useLocation } from 'react-router-dom';
import { MainArticulo } from './MainArticulo';
import { MainGeneral } from './MainGeneral';

export const Main = () => {
  const location = useLocation();
  console.log(location)

  return (
    <section className='main'>
      {
        (location.pathname == '/' && <MainGeneral />)
      }
      {
        (location.pathname == '/articulo' && <MainArticulo />)
      }
    </section>

  )
}
