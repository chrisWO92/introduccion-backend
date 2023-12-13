//const process = require('process')
//no es necesario hacer el require porque es un módulo global siempre disponible

process.on('beforeExit', () => {
    console.log('Antes de salir')
    
})

process.on('exit', () => {
    console.log('Saliendo')
    setTimeout(() => {
        console.log('Esto no se verá')
    }, 0)
})

process.on('uncaughtException', (err, origin) => {
    console.error('Vaya se nos ha escapado un error')
    setTimeout(() => {
        console.log('Esto no se verá')
    }, 0)
    //console.error(err)
})

funcioQueNoExiste()