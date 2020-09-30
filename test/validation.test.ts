import request from "supertest"

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

    /**
     * countries
     */
    it("fails on empty param on GET /countries", async function () {
        return request(server)
            .get("/countries")
            .query({ filter: '' })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(422)
    })

    it("fails on wrong param on GET /countries", async function () {
        return request(server)
            .get("/countries")
            .query({ filter: 'au8s' })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(422)
    })

    it("fails on bad order param on GET /countries", async function () {
        return request(server)
            .get("/countries")
            .query({ order: "des" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(422)
    })

    /**
     * append
     */
    it("fails on bad start param on GET /append", async function () {
        return request(server)
            .get("/append")
            .query({ start: null })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(422)
    })

    it("fails on bad end param on GET /append", async function () {
        return request(server)
            .get("/append")
            .query({ start: "" })
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(422)
    })



})

