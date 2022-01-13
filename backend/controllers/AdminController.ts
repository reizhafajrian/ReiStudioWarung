import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { comparePassword, encrypt } from '../middlewares/encrypt'
import { generateToken } from '../middlewares/jwt'
import Admin from '../models/Admin'

import {
  validationHandler,
  validations,
} from '../middlewares/validationHandler'

export const AdminController = {
  login: async function (req: Request, res: Response, next: NextFunction) {
    const { emailOrUsername, password } = req.body

    // check email or username
    let user = await Admin.findOne({ email: emailOrUsername })

    if (!user) {
      user = await Admin.findOne({ username: emailOrUsername })
    }

    // user not found
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: 'Invalid email or password',
      })
    }

    const isMatch = await comparePassword(password, user.password)

    if (user.role === 0) {
      res.status(200).json({
        status: 200,
        message: 'You are not an admin',
      })
    } else {
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
      } else {
        res
          .status(400)
          .json({
            status: 400,
            message: 'Invalid email or password',
          })
          .send({ error: 'Invalid email or password' })
      }
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
        // check('Authorization', 'Invalid token').notEmpty(),
      ])
    )
    // const { authorization } = req.headers
    const { name, username, email, phone, address, password, role } = req.body
    // const token = authorization.split(' ')[1]
    // const result = await verifyToken(token)
    // if (result.user.role !== 1) {
    //   return res.status(401).json({
    //     status: 401,
    //     message: 'You are not an admin',
    //   })
    // }
    const passwordhash = await encrypt(password)

    const createUser = await Admin.create({
      name,
      username,
      email,
      phone,
      address,
      password: passwordhash,
      role,
      //   privacy_policy: valid,
    })

    const user = await Admin.findOne(createUser, { password: 0, __v: 0 })

    res.status(201).send({
      status: 201,
      message: 'Admin created successfully',
      user,
    })
  },
}
