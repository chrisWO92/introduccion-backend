const fs = require('fs')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('utf8')
readableStream.on('data', (chunk) => {
    data += chunk
    // console.log(chunk.toString())
})

readableStream.on('end', () => {
    //data += chunk
    console.log(data)
})

process.stdout.write('hola ')
process.stdout.write('que ')
process.stdout.write('tal ')
