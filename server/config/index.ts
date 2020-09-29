if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const {
    PORT,
    NODE_ENV,
    SIMPLE_ARRAY
} = process.env as {
    [key: string]: string;
};

export default { PORT, NODE_ENV, SIMPLE_ARRAY }

