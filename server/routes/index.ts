import { Router } from 'express'

import HandlerFactory from '../handlers'
import validationManater from './middleware/validationManager'
import countriesValidator from './validators/countries.validator'

const router = Router()

router.get("/countries", countriesValidator, validationManater, HandlerFactory.getAllCountries)
router.get("/reverse/:str", HandlerFactory.reverseString)
router.get("/append", HandlerFactory.headTail)

export default router
