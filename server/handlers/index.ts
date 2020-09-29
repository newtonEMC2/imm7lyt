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
            const { filter, order } = req.query
            let rp: any = await fetch('https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8')
            rp = await rp.json()

            if (filter) {
                rp = rp.filter((el: any) => {
                    if (el.country.includes(filter) || el.code.includes(filter)) return el
                })
            }
            if (order) {
                rp.sort((a: any, b: any) => order === "asc" ? a.vat - b.vat : b.vat - a.vat);
            }

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
        try {
            let { str } = req.params
            str = _reverse(str);
            return res.status(200).json({ success: true, data: str })
        } catch (e) {
            return _errorHandler(res, e.message)
        }

    }

    /**
     * 
     * @param req 
     * @param res 
     */
    const headTail = (req: Request, res: Response): Response => {
        try {
            const { start, end } = req.query
            const simpleArr = process.env.SIMPLE_ARRAY
            console.log(simpleArr)
            // if (start) simpleArr.unshift(start)
            // if (end) simpleArr.push(end)
            return res.status(200).json({ success: true, data: simpleArr })
        } catch (e) {
            return _errorHandler(res, e.message)

        }
    }

    /**
     * 
     * @param str 
     */
    const _reverse = (str: string): string => {
        let reversed: (string[] | string) = [...str].reverse()
        return reversed.reduce((a: string, c: string) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c), "")
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
        getAllCountries, reverseString, headTail
    }
}

export default HandlerFactory()