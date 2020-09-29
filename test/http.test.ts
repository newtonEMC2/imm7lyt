import request from "supertest"
import { Response } from "express"

process.env.NODE_ENV = "test"

describe("http tests", () => {
    let server: any

    beforeEach(() => {
        delete require.cache[require.resolve("../server/server.ts")]
        server = require("../server/server.ts")
    })

    afterEach(async () => {
        await server.close()
    })

    it("gets all countries on GET /countries", async function () {
        return request(server)
            .get("/countries")
            .query({})
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(({ body }) => { if (!body.success) throw new Error('success is false') })
            .expect(({ body }) => { if (!body.data.length) throw new Error('success is false') })
            .expect(200)
    })

    it("gets countries by filter on GET /countries?filter=", async function () {
        return request(server)
            .get("/countries")
            .query({ filter: "Aus" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(({ body }) => { if (!body.success) throw new Error('success is false') })
            .expect(({ body }) => { if (body.data.length !== 1) throw new Error('just one doc should have been retrieved') })
            .expect(({ body }) => { if (body.data[0].country !== "Austria") throw new Error('the country retrieved has to be Austria') })
            .expect(200)
    })

    it("gets countries by code on GET /countries?filter=", async function () {
        return request(server)
            .get("/countries")
            .query({ filter: "PT" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(({ body }) => { if (!body.success) throw new Error('success is false') })
            .expect(({ body }) => { if (body.data.length !== 1) throw new Error('just one doc should have been retrieved') })
            .expect(({ body }) => { if (body.data[0].country !== "Portugal") throw new Error('the country retrieved has to be Portugal') })
            .expect(200)
    })

    it("gets countries ordered asc on GET /countries?order=", async function () {
        return request(server)
            .get("/countries")
            .query({ order: "asc" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(({ body }) => { if (!body.success) throw new Error('success is false') })
            .expect(({ body }) => { if (!body.data.length) throw new Error('more than 0 docs retrieved') })
            .expect(({ body }) => {
                for (let i = 0; i < body.data.length - 2; i++) {
                    if (body.data[i].vat > body.data[i + 1].vat) throw new Error('')
                }
            })
            .expect(200)
    })

    it("gets countries ordered desc on GET /countries?order=", async function () {
        return request(server)
            .get("/countries")
            .query({ order: "desc" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(({ body }) => { if (!body.success) throw new Error('success is false') })
            .expect(({ body }) => { if (!body.data.length) throw new Error('more than 0 docs retrieved') })
            .expect(({ body }) => {
                for (let i = 0; i < body.data.length - 2; i++) {
                    if (body.data[i].vat < body.data[i + 1].vat) throw new Error('')
                }
            })
            .expect(200)
    })

})

