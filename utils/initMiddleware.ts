import { RequestHandler, Request, Response } from 'express'
import { NextApiRequest, NextApiResponse } from 'next'

type NextApiRequestWithFormData = NextApiRequest &
  Request & {
    files: any[]
  }

type NextApiResponseCustom = NextApiResponse & Response

export default function initMiddleware(middleware: RequestHandler) {
  return (
    req: NextApiRequestWithFormData,
    res: NextApiResponseCustom
  ): Promise<any> =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

// import { Request, Response } from 'express'

// const initMiddleware = (middleware: any) => {
//   return (req, res) =>
//     new Promise((resolve, reject) => {
//       middleware(req, res, (result: any) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }

//         return resolve(result)
//       })
//     })
// }

// export default initMiddleware

// import { Request, Response } from 'express'

// const initMiddleware = (middleware: any) => {
//   return (req: Request, res: Response) =>
//     new Promise((resolve, reject) => {
//       middleware(req, res, (result: any) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }

//         return resolve(result)
//       })
//     })
// }

// export default initMiddleware
