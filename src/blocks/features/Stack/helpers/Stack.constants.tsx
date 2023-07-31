import React from 'react'
import * as s from '../components/Icons'

type TStack = { [index: string]: React.ReactNode }

export const STACK: TStack = {
  cypress: <s.CypressIco />,
  express: <s.ExpressIco />,
  firebase: <s.FirebaseIco />,
  git: <s.GitIco />,
  jest: <s.JestIco />,
  nodeJs: <s.NodeJsIco />,
  postCss: <s.PostCssIco />,
  react: <s.ReactIco />,
  redux: <s.ReduxIco />,
  sass: <s.SassIco />,
  ts: <s.TSIco />,
  webpack: <s.WebpackIco />,
}
