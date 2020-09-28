import { Request, Response } from 'express'
import fetch from 'isomorphic-unfetch'

const HandlerFactory = () => {

    /**
     * 
     * @param req 
     * @param res 
     */
    const getAllCountries = async (req: Request, res: Response): Promise<Response> => {
        try {
            let rp = await fetch('https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8')
            rp = await rp.json()

            return res.status(200).json({ success: true, data: rp })

        } catch (e) {
            return _errorHandler(res, e.message)
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    const reverseString = (req: Request, res: Response): Response => {
        let { str } = req.params

        str = _reverse(str);

        return res.status(200).json({ success: true, data: str })
    }

    /**
     * 
     * @param str 
     */
    const _reverse = (str: string): string => {
        if (str === "")
            return ""
        else
            return _reverse(str.substr(1)) + str.charAt(0);

    }

    /**
     * 
     * @param res 
     * @param message 
     */
    const _errorHandler = (res: Response, message: String): Response => {
        return res.status(500).json({ error: "Internal Server Error", message })
    }



    return {
        getAllCountries, reverseString
    }
}

export default HandlerFactory()