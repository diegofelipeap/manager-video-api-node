import { fastify } from "fastify"
import { dataBaseMemory } from "./database-memory.js"

const server = fastify()

server.post('/videos', () => {
    return `Server started ✅`
})
server.get('/videos', () => {
    return `Server started ✅`
})
server.put('/videos', () => {
    return `Server started ✅`
})
server.delete('/videos', () => {
    return `Server started ✅`
})

server.listen({
    port: 3333,
})