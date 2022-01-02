import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { comparePassword, encrypt } from '../middlewares/encrypt'
import { generateToken, verifyToken } from '../middlewares/jwt'
import Customer from '../models/Customer'
import {
  validationHandler,
  validations,
} from '../middlewares/validationHandler'

export const CustomerController = {
  getProfile: async function (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (authorization) {
      const token = authorization.split(' ')[1]

      const r: any = verifyToken(String(token))

      if (typeof r.user !== 'undefined') {
        const user = await Customer.findById(r.user.id)

        return res.status(200).json({ status: 200, user })
      }
    }
  },
  updateProfile: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { name, username, email, phone, address } = req.body
    const { id } = req.query

    await validationHandler(
      req,
      res,
      validations([
        check('name', 'Full name is required!').not().isEmpty(),
        check('username', 'Username is required!').not().isEmpty(),
        check('address', 'Address is required!').not().isEmpty(),
        check('email', 'Invalid email address').isEmail(),
        check('phone', 'Phone number is required!')
          .notEmpty()
          .isMobilePhone('id-ID')
          .withMessage('Must provide a valid phone number'),
      ])
    )

    await Customer.findByIdAndUpdate(id, {
      name,
      username,
      email,
      phone,
      address,
    })

    return res.status(200).send({
      message: 'User updated successfully',
    })
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
      let rest = {
        id: user._id,
        role: user.role,
      }

      const token = await generateToken(rest)

      return res.status(200).json({
        status: 200,
        user: user,
        token: token,
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
  changePassword: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { password, newPassword } = req.body
    const { token } = req.cookies

    await validationHandler(
      req,
      res,
      validations([
        check('newPassword', 'Password at least 8 characters')
          .isLength({
            min: 8,
          })
          .custom((value, { req }) => {
            if (value !== req.body.confPassword) {
              throw new Error('The password is not the same as the new one')
            } else {
              return value
            }
          }),
      ])
    )
    console.log('done validation')

    if (token) {
      const decoded: any = verifyToken(token)

      const id = decoded.user.id

      let user = await Customer.findById(id)

      const isMatch = await comparePassword(password, user.password)

      console.log(isMatch)

      if (isMatch) {
        const newPasswordHash = await encrypt(newPassword)

        const user = await Customer.findByIdAndUpdate(id, {
          password: newPasswordHash,
        })
        return res.status(200).json({
          status: 200,
          user,
        })
      }

      return res.status(401).json({
        status: 401,
        message: 'Invalid password',
      })
    }
  },
}
