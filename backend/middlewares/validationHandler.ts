import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import initMiddleware from '../../utils/initMiddleware'

/**
 * @description Middleware Validation
 * @param       {Array} validations
 * @returns     {success, errors}
 */
const validateMiddleware = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation: any) => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) return next()

    let err: any = {}
    errors.array().map(({ param, msg }) => {
      err[`${param}`] = msg
    })

    return res.status(400).json({ success: false, errors: err })
  }
}

// Base validation
export const validations = (array: any) =>
  initMiddleware(validateMiddleware(array, validationResult))

/**
 * @description Validation handling for api route
 * @param       {*} req
 * @param       {*} res
 * @param       {array} checkValidation
 * @returns     print errors
 */

export const validationHandler = async (
  req: Request,
  res: Response,
  checkValidation: any
) => {
  await checkValidation(req, res)

  const errors = validationResult(req)

  return !errors.isEmpty && res.status(422).json({ errors })
}
