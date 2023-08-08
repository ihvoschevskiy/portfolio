import { TValidateSchema } from '../types/types'

const nameReg = /^[a-zA-Zа-яА-ЯёЁ\s]*$/g
const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const nameSchema: TValidateSchema = {
  required: 'поле обязательно для заполнения',
  pattern: {
    value: nameReg,
    message: 'имя может содержать буквы русского и латинского алфафита',
  },
  validate: {
    noWhiteSpaces: value => !!value.trim() || 'поле обязательно для заполнения',
  },
}

export const emailSchema: TValidateSchema = {
  required: 'поле обязательно для заполнения',
  pattern: {
    value: emailReg,
    message: 'введите корректный email адрес',
  },
}

export const messageSchema: TValidateSchema = {
  required: 'поле обязательно для заполнения',
  validate: {
    noWhiteSpaces: value => !!value.trim() || 'поле обязательно для заполнения',
  },
}
