import { router } from '@entities/message/message.router'
import cors from 'cors'
import express, { Express } from 'express'
import path from 'path'

export const app: Express = express()

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.PROD_HOST as string]
        : [process.env.DEV_ORIGIN as string],
  }),
)
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/api', router)
app.use('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})
