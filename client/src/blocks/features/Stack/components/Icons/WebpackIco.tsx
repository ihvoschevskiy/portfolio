import { TStackType } from '@features/Stack/types/types'
import React, { FC } from 'react'

interface IProps {
  type: TStackType
}

export const WebpackIco: FC<IProps> = ({ type }) => {
  if (type === 'hex')
    return (
      <svg width="92" height="107" viewBox="0 0 92 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47 29L23 41.6667V67L47 79.6667L71 67V41.6667L47 29Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M46.2943 54.9664V66.3664L34.2943 60.6664V48.6331L46.2943 54.9664Z" fill="currentColor" />
        <path d="M47.7057 54.9664V66.3664L59.7057 60.6664V48.6331L47.7057 54.9664Z" fill="currentColor" />
        <path d="M47 53.7L35 47.3667L47 41.6667L59 47.3667L47 53.7Z" fill="currentColor" />
        <path
          d="M46.2943 32.7999V40.3999L33.5884 46.7332L26.5296 42.9332L46.2943 32.7999Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M46.2943 75.8668V68.2668L33.5884 61.9334L26.5296 65.7334L46.2943 75.8668Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M32.8823 48.0002L25.8235 44.2002V64.4668L32.8823 60.6668V48.0002Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M47.7059 32.7999V40.3999L60.4118 46.7332L67.4706 42.9332L47.7059 32.7999Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M47.7059 75.8668V68.2668L60.4118 61.9334L67.4706 65.7334L47.7059 75.8668Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M61.1174 48.0002L68.1763 44.2002V64.4669L61.1174 60.6669V48.0002Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
      </svg>
    )
  if (type === 'square')
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M24.5 5L6.5 14.5V33.5L24.5 43L42.5 33.5V14.5L24.5 5Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M23.9707 24.4749V33.0248L14.9707 28.7499V19.7249L23.9707 24.4749Z" fill="currentColor" />
        <path d="M25.0293 24.4749V33.0248L34.0293 28.7499V19.7249L25.0293 24.4749Z" fill="currentColor" />
        <path d="M24.5 23.525L15.5 18.775L24.5 14.5L33.5 18.775L24.5 23.525Z" fill="currentColor" />
        <path
          d="M23.9707 7.84991V13.5499L14.4413 18.2999L9.14719 15.4499L23.9707 7.84991Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M23.9707 40.1501V34.4501L14.4413 29.7001L9.14719 32.5501L23.9707 40.1501Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M13.9117 19.2501L8.61758 16.4001V31.6001L13.9117 28.7501V19.2501Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M25.0294 7.84991V13.5499L34.5588 18.2999L39.8529 15.4499L25.0294 7.84991Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M25.0294 40.1501V34.4501L34.5588 29.7001L39.8529 32.5501L25.0294 40.1501Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M35.0881 19.2501L40.3822 16.4001V31.6002L35.0881 28.7501V19.2501Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
      </svg>
    )
}
