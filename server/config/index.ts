if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const {
    PORT,
    NODE_ENV,
    SIMPLE_ARRAY = "[MY_ARRAY]"
} = process.env

export default { PORT, NODE_ENV, SIMPLE_ARRAY }

