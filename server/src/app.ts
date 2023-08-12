import { router } from '@entities/message/message.router'
import cors from 'cors'
import express, { Express } from 'express'

export const app: Express = express()

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'producton'
        ? [process.env.PROD_HOST as string]
        : ['http://localhost:3000'],
  }),
)
app.use(express.json())
app.use('/api', router)
