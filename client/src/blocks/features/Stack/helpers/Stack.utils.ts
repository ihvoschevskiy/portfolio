import React from 'react'
import { TStack } from '../types/types'

export const fyShuffle = (arr: React.ReactNode[]) => {
  let length: number = arr.length

  while (--length > 0) {
    const randIdx: number = Math.floor(Math.random() * (length + 1))

    ;[arr[randIdx], arr[length]] = [arr[length], arr[randIdx]]
  }
  return arr
}

export const getProjectStack = (projectStack: string[], stack: TStack): TStack => {
  return projectStack.reduce((acc: TStack, cur: string) => {
    if (stack[cur]) acc[cur] = stack[cur]
    return acc
  }, {})
}
