import request from "supertest"

process.env.NODE_ENV = "test"

describe("http tests", () => {
    let server: any

    beforeEach(() => {
        delete require.cache[require.resolve("../server.ts")]
        server = require("../server.ts")
    })

    afterEach(async () => {
        await server.close()
    })

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



})

