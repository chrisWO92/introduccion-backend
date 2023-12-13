const funcion1 = () => {
    console.group('funcion 1')
    funcion2()
    console.groupEnd('funcion 1')
}

const funcion2 = () => {
    console.group('funcion 2')
    console.log('dentro de funcion 2')
    console.log('dentro de funcion 2')
    console.log('aún en funcion 2')
    console.log('última de funcion 2')
    console.groupEnd('funcion 2')
}

funcion1()