import { Request, Response } from 'express'
import { verifyToken } from './jwt'

export const isAuthenticatedUser = (req: Request, res: Response) => {
  const { token } = req.cookies

  try {
    const decoded = verifyToken(token)

    return res.status(200).json({
      user: decoded,
    })
  } catch (error) {
    return res.status(405).end(error)
  }
}
