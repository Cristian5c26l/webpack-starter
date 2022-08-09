import '../css/componentes.css';// 
//import webpacklogo from '../assets/img/webpack-logo.png'; asi genera el archivo o imagen extra en el build de production que es dist

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!`;
    document.body.append( h1 );


    // Img

    //console.log( webpacklogo );
    const img = document.createElement('img');
    img.src = '../assets/img/webpack-logo.png';

    document.body.append(img);
}

// cosas no exportadas solo funcionan en este archivo
