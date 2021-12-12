import { comparePassword, encrypt } from '../middlewares/encrypt'
import { generateToken, verifyToken } from '../middlewares/jwt'
import Customer from '../models/Customer'
import { check } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

import {
  validationHandler,
  validations,
} from '../middlewares/validationHandler'

export const CustomerController = {
  profile: async function (req: Request, res: Response, next: NextFunction) {
    const { token } = req.cookies

    if (token) {
      const decoded = verifyToken(token)

      return res.status(200).json({
        status: 200,
        user: decoded.user,
      })
    } else {
      return res.status(401).json({
        status: 401,
        message: 'Login access needed',
      })
    }
  },
  login: async function (req: Request, res: Response, next: NextFunction) {
    const { emailOrUsername, password } = req.body

    // check email or username
    let user = await Customer.findOne({ email: emailOrUsername })

    if (!user) {
      user = await Customer.findOne({ username: emailOrUsername })
    }

    // user not found
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: 'Invalid email or password',
      })
    }

    const isMatch = await comparePassword(password, user.password)

    if (isMatch) {
      const token = await generateToken(user)
      return res.status(200).json({
        status: 200,
        user: user,
        token: token,
      })
    } else {
      res.status(400).json({
        status: 400,
        message: 'Invalid email or password',
      })
    }
  },
  register: async function (req: Request, res: Response, next: NextFunction) {
    await validationHandler(
      req,
      res,
      validations([
        check('name', 'Full name is required!').not().isEmpty(),
        check('username', 'Username is required!').not().isEmpty(),
        check('address', 'Address is required!').not().isEmpty(),
        check('email', 'Invalid email address').isEmail(),
        // check('valid', 'Invalid').notEmpty().isBoolean(),
        check('phone', 'Phone number is required!')
          .notEmpty()
          .isMobilePhone('id-ID')
          .withMessage('Must provide a valid phone number'),
        check('password', 'Password at least 8 characters')
          .isLength({
            min: 8,
          })
          .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
              throw new Error('The password is not the same as the new one')
            } else {
              return value
            }
          }),
      ])
    )
    const { name, username, email, phone, address, password } = req.body
    const passwordhash = await encrypt(password)
    const createUser = await Customer.create({
      name,
      username,
      email,
      phone,
      address,
      password: passwordhash,
      role: 0,
      //   privacy_policy: valid,
    })
    const user = await Customer.findOne(createUser, { password: 0, __v: 0 })
    res.status(201).send({
      status: 201,
      message: 'User created successfully',
      user,
    })
  },
}
