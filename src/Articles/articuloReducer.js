export const articuloReducer = (state = [],action) => {

    console.log(action)

    switch (action.type) {
        case 'added':
            console.log('agregar')
            localStorage.getItem('articuloSeleccionado')&& localStorage.setItem('articuloSeleccionado',JSON.stringify(action.payload));
            return [action.payload];
               
        default:
            return state;
    }
}