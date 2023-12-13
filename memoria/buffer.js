// const buffer = Buffer.alloc(4)
// const buffer = Buffer.from([1, 2, 3])
// const buffer = Buffer.from('hola')


// console.log(buffer.toString())

const abc = Buffer.alloc(26)

for (i = 0; i < 26; i++) {
    abc[i] = i + 97
}


console.log(abc.toString())