/*
Función que retorna una promesa.
Una promesa es una acción asíncrona. Se ejecuta cuando pueda ejecutarse,
pero no sabemos con exactitud cuando lo hará. La promesa ejecuta la acción
tan rápido como pueda y retorna los respectivos valores. 
Cuando se ejecuta, podemos enterarnos mediante el método .then(), el cual puede
usarse para ejecutar otra acción inmediatamente se haya ejecutado la promesa.
*/
async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

async function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('bla bla bla')
            //resolve(nombre)
            resolve(nombre)
        }, 1500)
    })
}

async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('adios, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

// ------ ejecución


/*
Lo que se logra con esa función async es ejecutar acciones asíncronas como si fueran síncronas.
*/
async function main() {
    //Con la sigiente instrucción se guarda el parámetro nombre en una variable y luego se pasa a la función adios()
    let nombre = await hola('Cristian')
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Terminando el proceso')

}

console.log('Iniciando el proceso')
main()

//siempre que usemos promesas, debe haber un then, y al final, siempre, un .catch()