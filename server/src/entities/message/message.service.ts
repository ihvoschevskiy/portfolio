import nodemailer, { SendMailOptions } from 'nodemailer'
import { TMessage } from './message.api.types'

export const sendEmailMessage = async (message: TMessage) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ACCOUNT_ADDRESS,
      pass: process.env.MAIL_ACCOUNT_TOKEN,
    },
  })

  const emailMsg: SendMailOptions = {
    from: {
      name: message.name,
      address: message.email,
    },
    to: process.env.MAIL_ACCOUNT_ADDRESS,
    subject: message.subject,
    text: message.text,
  }

  await transporter.sendMail(emailMsg)
}
