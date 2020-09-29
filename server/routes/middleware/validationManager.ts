import { validationResult } from "express-validator/check"
import { Request, Response, NextFunction } from "express"

const validationManager = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.array().length > 0) {
        return res.status(422).json({
            message: "Validation failed",
            errors: errors.array()
        })
    }
    next()
}

module.exports = validationManager