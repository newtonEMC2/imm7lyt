import { Router } from 'express'

import HandlerFactory from '../handlers'
import validationManager from './middleware/validationManager'
import countriesValidator from './validators/countries.validator'
import appendValidator from './validators/headTail.validator'

const router = Router()

router.get('/countries', countriesValidator, validationManager, HandlerFactory.getAllCountries)
router.get('/reverse/:str', HandlerFactory.reverseString)
router.get('/append', appendValidator, validationManager, HandlerFactory.headTail)

export default router
