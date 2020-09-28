import express from 'express'
import mongoose from 'mongoose'
import { Router } from 'express'

import HandlerFactory from '../handlers'

const router = Router()

router.get("/countries", HandlerFactory.getAllCountries)
router.get("/reverse/:str", HandlerFactory.reverseString)

export default router
