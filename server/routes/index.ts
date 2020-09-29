import { Router } from 'express'

import HandlerFactory from '../handlers'

const router = Router()

router.get("/countries", HandlerFactory.getAllCountries)
router.get("/reverse/:str", HandlerFactory.reverseString)
router.get("/append", HandlerFactory.headTail)

export default router
