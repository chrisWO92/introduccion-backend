console.time('bucle 1')
let suma = 0

console.time('bucle 2')
// console.log('Hola')

for (let i = 0; i < 100; i++) {
    suma += 1
}

console.timeEnd('bucle 2')

console.time('bucle 3')


for (let i = 0; i < 1000; i++) {
    suma += 1
}

console.timeEnd('bucle 3')

console.time('async')
console.log('Empezó el proceso async')
asincrona()
    .then(() => {
        console.timeEnd('async')
    })


console.timeEnd('bucle 1')

function asincrona () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Terminó el proceso async')
            resolve()
        })
    })
}
