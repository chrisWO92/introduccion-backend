/*
Función que retorna una promesa.
Una promesa es una acción asíncrona. Se ejecuta cuando pueda ejecutarse,
pero no sabemos con exactitud cuando lo hará. La promesa ejecuta la acción
tan rápido como pueda y retorna los respectivos valores. 
Cuando se ejecuta, podemos enterarnos mediante el método .then(), el cual puede
usarse para ejecutar otra acción inmediatamente se haya ejecutado la promesa.
*/
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('bla bla bla')
            //resolve(nombre)
            reject('Ha habido un error')
        }, 1500)
    })
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('adios, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

// ------ ejecución
console.log('Iniciando el proceso')
hola('Cristian')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando el proceso')
    })
    .catch(error => {
        console.log('Ha habido un error grave')
        console.log(error)
    })