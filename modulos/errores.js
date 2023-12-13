const otraFuncion = () => {
    try {
        seRompeAsync()
    } catch (err) {
        console.log(err)
    }
}

const serompe = () => {
    return 3 + z
}

const seRompeAsync = (cb) => {
    setTimeout(() => {
        try {
            return 3 + z
            
        } catch (err) {
            cb(err)
            console.log('Entró al error')
            console.log(err.message)
        }
    })
    
}


try {
    seRompeAsync(() => {
        console.log('Hay error')
    })    
} catch (err) {
    console.error('Ha habido un error')
    console.log(err)
    console.error('Pero no pasa nada, lo hemos capturado')

}

console.log('Final')