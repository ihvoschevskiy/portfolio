import './SquareStack.css'
import { SQUARE_STACK } from '@features/Stack/helpers/Stack.constants'
import { getProjectStack } from '@features/Stack/helpers/Stack.utils'
import React, { FC } from 'react'
import { Square } from '../Square/Square'

interface IProps {
  projectStack: string[]
}

export const SquareStack: FC<IProps> = ({ projectStack }) => {
  const [stack, setStack] = React.useState<React.ReactNode[]>([])

  React.useEffect(() => {
    setStack(Object.values(getProjectStack(projectStack, SQUARE_STACK)))
  }, [projectStack])

  return (
    <section className="square-stack">
      <div className="square-stack__in">
        {stack.map((item, index) => (
          <Square key={index}>{item}</Square>
        ))}
      </div>
    </section>
  )
}
