/* 
ErrorFirstCallback es un patrón de código usado con funciones asincronas.
Consiste en catchear el error de una función asincrona mediante un try catch y un
console.error(), ya que este, invocado dentro del callback de una función asincrona, puede 
detectar errores de otro hilo de ejecución, como sucede en este caso.
Por otro lado, el método throw err no va a funcionar porque sólo detecta errores en
funciones sincronas.
*/

function asincrona(cb) {
    //se crea una función asincrona con setTimeout()
    setTimeout(function () {
        try {
            let a = 3 + z
            //si no hay error, le pasamos null como error al callback
            cb(null, a)
        } catch (error) {
            //si hay error, le pasamos el error al callback
            cb(error)
        }
    }, 1000)
}
asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error')
        console.error(err)
        return false
        // throw err // NO VA A FUNCIONAR
    }

    console.log('No han habido errores. El dato es: ', dato)
})

