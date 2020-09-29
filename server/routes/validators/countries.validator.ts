const { query } = require("express-validator")

export default [
    query("filter")
        .not().isEmpty()
        .optional()
        .custom((filter: string) => {
            if (filter === '') return true
            if (!filter.match(/\d/)) return true
            return false
        }),
    query("order")
        .optional()
        .isString()
        .matches(/^(asc|desc)$/)
]