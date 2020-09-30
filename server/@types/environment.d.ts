declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            PORT: string;
            SIMPLE_ARRAY: string;
            PORT_TEST: string
        }
    }
}




export { }