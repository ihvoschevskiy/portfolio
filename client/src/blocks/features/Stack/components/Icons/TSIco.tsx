import { TStackType } from '@features/Stack/types/types'
import React, { FC } from 'react'

interface IProps {
  type: TStackType
}

export const TSIco: FC<IProps> = ({ type }) => {
  if (type === 'hex')
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        width="92"
        height="107"
        viewBox="0 0 92 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.5 30.5H70.5V77.5H23.5V30.5Z" fill="none" stroke="currentColor" strokeLinejoin="round" />
        <path
          d="M51.6534 51.3333H33.9694V55.6853H40.3121V75.3333H45.3374V55.6853H51.6534V51.3333Z"
          fill="currentColor"
        />
        <path
          d="M67.2586 56.7787C67.2586 56.7787 64.8759 55.1893 62.1826 55.1893C59.4893 55.1893 58.5199 56.4693 58.5199 57.8373C58.5199 61.368 68.3613 61.0147 68.3613 68.12C68.3613 79.0653 53.3559 74.2107 53.3559 74.2107V68.96C53.3559 68.96 56.2253 71.1226 59.6666 71.1226C63.1079 71.1226 62.9773 68.872 62.9773 68.5627C62.9773 65.2973 53.2239 65.2973 53.2239 58.0587C53.2239 48.2173 67.4346 52.1 67.4346 52.1L67.2586 56.7787Z"
          fill="currentColor"
        />
      </svg>
    )
  if (type === 'square')
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
      >
        <path d="M41.5 7H7.5V41H41.5V7Z" fill="currentColor" />
        <path
          d="M27.7962 22.1111H15.27V25.1938H19.7627V39.1111H23.3224V25.1938H27.7962V22.1111Z"
          fill="var(--color-bg)"
        />
        <path
          d="M38.8499 25.9682C38.8499 25.9682 37.1621 24.8424 35.2544 24.8424C33.3466 24.8424 32.66 25.7491 32.66 26.7181C32.66 29.219 39.6309 28.9687 39.6309 34.0016C39.6309 41.7546 29.0021 38.3159 29.0021 38.3159V34.5966C29.0021 34.5966 31.0346 36.1285 33.4722 36.1285C35.9098 36.1285 35.8172 34.5343 35.8172 34.3152C35.8172 32.0023 28.9086 32.0023 28.9086 26.8749C28.9086 19.9039 38.9745 22.6541 38.9745 22.6541L38.8499 25.9682Z"
          fill="var(--color-bg)"
        />
      </svg>
    )
}
