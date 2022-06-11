import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';


const navBarItems =[
  {
    id: 1,
    destino: 'Relacionado',
    link: '#'
  },
  {
    id: 2,
    destino: 'Sección 1',
    link: '#'
  },
  {
    id: 3,
    destino: 'Sección 2',
    link: '#'
  }
]


export const Navbar = () => {  
  const navBar = useRef(null) // Con el hook ref puedo hacer apuntar a un elemento
  // ya que con react, apuntar al DOM es imposible
  const [open, setOpen] = useState(false);
  const [width,setWidth] = useState(window.innerWidth)

  const handleResize = () =>{ // Función para setear el tamaño de la pantalla
    setWidth(window.innerWidth);
  }
  
  const handleClick = (event) =>{ // Función para abrir la barra de navegación al cambiar el estado
    setOpen(true);
  }

  window.addEventListener('resize', handleResize)

  document.addEventListener('click',function (event) { 
    if(event.target !== navBar.current){
      setOpen(false);
    }
  })

  return (
    <nav className='navbar' onClick={handleClick} ref={navBar} >
      <Box sx={{height: '100%', width: '100%',backgroundColor: 'info.light'}}>
      </Box>
    </nav>
  )
}
