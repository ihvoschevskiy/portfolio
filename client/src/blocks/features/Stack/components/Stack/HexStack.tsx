import './HexStack.css'
import { Subtitle } from '@components/Subtitle/Subtitle'
import { HEX_STACK } from '@features/Stack/helpers/Stack.constants'
import { fyShuffle } from '@features/Stack/helpers/Stack.utils'
import React, { FC } from 'react'
import { Hex } from '../Hex/Hex'

export const HexStack: FC = () => {
  const [stack, setStack] = React.useState<React.ReactNode[]>([])

  React.useEffect(() => {
    setStack(fyShuffle(Object.values(HEX_STACK)))
  }, [])

  return (
    <section className="hex-stack">
      <Subtitle subtitle="Stack" modifier="underlined" />
      <div className="hex-stack__in">
        <div className="hex-stack__hexs">
          {stack.slice(0, 2).map((item, index) => {
            return <Hex key={index}>{item}</Hex>
          })}
          <Hex modifier="accent" />
          {stack.slice(2, 9).map((item, index) => {
            return <Hex key={index}>{item}</Hex>
          })}
          <Hex modifier="accent">{stack[9]}</Hex>
          {stack.slice(10).map((item, index) => {
            return <Hex key={index}>{item}</Hex>
          })}
        </div>
      </div>
    </section>
  )
}
