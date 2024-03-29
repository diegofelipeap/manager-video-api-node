import { randomUUID } from "node:crypto";
import { sql } from "./db.js";
export class dataBasePostgres {

    list(search) {

        let videos
        if (search) {
            videos = sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else {
            videos = sql`select * from videos where title ilike ${'%' + search + '%'}`
        }

        return videos
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video
        await sql`insert into videos(id, title, description, duration) VALUES(${videoId}), ${title}, ${duration}, ${description}`

    }
    async update(id, video) {
        const { title, description, duration } = video
        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration}} WHERE id = ${id}`
    }
    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
}