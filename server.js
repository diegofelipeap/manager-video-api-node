/* import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write(`Server started ✅`)
    return response.end()
  
})

server.listen(3333) */

import { fastify } from "fastify"

const server = fastify()

server.get('/', () => {
    return `Server started ✅`
})

server.listen({
    port: 3333,
})