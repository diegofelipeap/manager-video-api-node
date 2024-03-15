//API gerenciadora de vídeos. Métodos HTTP e CRUD.

import { fastify } from "fastify"
import { dataBaseMemory } from "./database-memory.js"

const server = fastify()

const database = new dataBaseMemory()

server.post('/videos', (request, reply) => {
    database.create({
        tittle: 'Video teste #01',
        description: 'Este é um vídeo para testar o método POST.',
        duration: 180
    })

    return reply.status(201).send()
})


server.get('/videos', () => {
    return `Server started ✅`
})
server.put('/videos/:id', () => {
    return `Server started ✅`
})
server.delete('/videos/:id', () => {
    return `Server started ✅`
})

server.listen({
    port: 3333,
})