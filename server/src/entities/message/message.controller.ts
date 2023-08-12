import { logger } from '@services/logger.service'
import { NextFunction, Request, RequestHandler, Response } from 'express'
import { sendEmailMessage, sendTelegramMessage } from './message.service'

type TResponse = Response<any, Record<string, any>>

const asyncWrapper = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next)

export const sendMessage = asyncWrapper(async (req: Request, res: Response): Promise<TResponse> => {
  logger.info(`${req.method}: ${req.originalUrl}`)

  const result = await sendEmailMessage(req.body)
  sendTelegramMessage(req.body)

  return res.status(201).json(result)
})
