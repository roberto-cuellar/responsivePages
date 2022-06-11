import React, { useEffect, useState } from 'react'
import { CartaArticulo } from './CartaArticulo';




export const ArticulosComponente = ({articulosPorPagina, descripcion,keyword,resultados,setResultados,inicioArticulo,setInicio}) => {   
    const [articulos,setArticulos] = useState([]);
  
    const removeAccents = (string) =>{ /// Necesaria para eliminar los acentos y las ñ, requerido por un proceso de busqueda eficiente
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
    
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === ''){
            setResultados(articulos)
        }
        else {           
            const noAccentString = removeAccents(lowercasedValue);
            const filteredData = articulos.filter((item) => {
                return Object.keys(item).some((key) => 
                    item[key].toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(noAccentString) /// Se debe realizar 
                    /// la eliminación de los caractéres especiales tambien en los campos de busqueda
                );
            });
            setResultados(filteredData);          
            };
    };
  
    useEffect(()=>{ /// Efecto para popular la base de datos de los artículos de forma local y no hacer múltiples peticiones
          if(!localStorage.getItem('articulosBlogGeneral')){
            localStorage.setItem('articulosBlogGeneral',JSON.stringify([]));
            console.log('Se ha creado la base de datos')
            // fetch('http://localhost:8000/articulos')
            fetch('https://radiant-refuge-85577.herokuapp.com/articulos')
                .then(resp => resp.json())
                .then((data)=>{               /// Promesas anidadas
            //console.log(data.images.original.url)
                localStorage.setItem('articulosBlogGeneral',JSON.stringify(data));
                const datos =localStorage.getItem('articulosBlogGeneral'); 
                setArticulos(JSON.parse(datos));
                setResultados(JSON.parse(datos));
                console.log('Artículos Descargados');
            })
            .catch(console.warn)
           
        }else{
            // console.log('existe la base de datos');
            const datos =localStorage.getItem('articulosBlogGeneral'); 
            setArticulos(JSON.parse(datos));
            setTimeout(() => {
                setResultados(JSON.parse(datos));    
                // console.log(articulos.length)
            }, 100);
            
            
        }

    },[]);

       
    useEffect(()=>{
        filterData(descripcion);
        setInicio(1);
    },[descripcion]);
    
    
    // console.log(resultados.length)


  return (
    <>
        {
            resultados.slice(parseInt((inicioArticulo-1)*articulosPorPagina),parseInt((inicioArticulo)*articulosPorPagina)).map((item,index)=>
            <CartaArticulo key={item._id} articulo={item} />
        )}
        
    </>

  )
}