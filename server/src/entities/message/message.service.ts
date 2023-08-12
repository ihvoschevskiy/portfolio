import { Bot } from 'grammy'
import nodemailer, { SendMailOptions } from 'nodemailer'
import { TMessage } from './message.api.types'

export const sendEmailMessage = async (body: TMessage) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ACCOUNT_ADDRESS,
      pass: process.env.MAIL_ACCOUNT_TOKEN,
    },
  })

  const emailMsg: SendMailOptions = {
    from: {
      name: body.name,
      address: body.email,
    },
    to: process.env.MAIL_ACCOUNT_ADDRESS,
    subject: body.subject,
    text: body.text,
  }

  await transporter.sendMail(emailMsg)
}

export const sendTelegramMessage = (body: TMessage) => {
  if (!process.env.TELEGRAM_BOT_TOKEN) return
  if (!process.env.TELEGRAM_USER_ID) return

  const message = `name: ${body.name}\nemail: ${body.email}\nmessage: ${body.text}`

  const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN)
  bot.api.sendMessage(process.env.TELEGRAM_USER_ID, message)
}
