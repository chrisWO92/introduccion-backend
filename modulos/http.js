const http = require('http')


const router = (req, res) => {
    console.log('Nueva petición')
    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal')
            res.end()
            break;
            
            default:
                res.write('Error 404: Not found')
                res.end()
            }
        }
        
http.createServer(router).listen(3000)
console.log('Escuchando en puerto 3000')