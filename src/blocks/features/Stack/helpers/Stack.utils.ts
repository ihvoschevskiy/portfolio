import React from 'react'

export const fyShuffle = (arr: React.ReactNode[]) => {
  let length: number = arr.length

  while (--length > 0) {
    const randIdx: number = Math.floor(Math.random() * (length + 1))

    ;[arr[randIdx], arr[length]] = [arr[length], arr[randIdx]]
  }
  return arr
}
