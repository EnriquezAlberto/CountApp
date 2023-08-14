import React from 'react'
import PropTypes from 'prop-types';

// const nombresLocos = () => {
//     return 'hola locos como estan?' + ' del barrio para el mundo';
// }

export const FirstApp = ( { title, subTitle, name } ) => {

if (!title){
    throw new Error('El title no existe')
}

return (
<>
<h1>{ title}</h1>
   <p>{name}</p>
    <p>{subTitle}</p>
</>
)
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'no hay titulo',
    subTitle: 'no hay subtitulo',
    name: 'Fernando Herrera',
}