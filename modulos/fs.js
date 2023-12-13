const fs = require('fs')

const leer = (path, cb) => {
    fs.readFile(path, (err, data) => {
        console.log(data.toString())
    })
}

//leer(__dirname + '/archivo1.txt', console.log)

const escribir = (patch, contenido, cb) => {
    fs.writeFile(patch, contenido, (err) => {
        if (err) {
            console.error('Hubo un grave error')
        } else {
            console.log('Se ha escrito correctamente')
        }
    })
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb)
}

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
borrar(__dirname + '/archivo1.txt', console.log)