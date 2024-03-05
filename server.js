import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write(`Server started ✅`)
    return response.end()
  
})

server.listen(3333)