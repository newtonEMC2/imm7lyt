if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const {
  PORT,
  PORT_TEST,
  NODE_ENV = 'development',
  SIMPLE_ARRAY = '[MY_ARRAY]'
} = process.env

export default { PORT, NODE_ENV, SIMPLE_ARRAY, PORT_TEST }
