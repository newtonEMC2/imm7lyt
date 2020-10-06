const { query } = require('express-validator')

export default [
  query('start')
    .optional()
    .not().isEmpty()
    .isString(),
  query('order')
    .optional()
    .not().isEmpty()
    .isString()
]
