import express, { Router } from 'express'
import { sendMessage } from './message.controller'

export const router: Router = express.Router()

router.route('/messages').post(sendMessage)
