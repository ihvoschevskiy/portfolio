import './StyledList.css'
import { StyledListIco } from '@components/Icons/StyledListIco'
import { TStyledListData } from '@tps/app.types'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
  data: TStyledListData[]
}

export const StyledList: FC<IProps> = ({ className, data }) => {
  return (
    <>
      {data.map((dataItm, indx) => {
        return (
          <div key={indx} className={cn('styled-list', className)}>
            <div className="styled-list__header">
              <StyledListIco className="styled-list__icon" />
              <h3 className="styled-list__title">
                {dataItm.title} <span>{dataItm.role}</span>
              </h3>
            </div>
            <div className="styled-list__in">
              <ul className="styled-list__list">
                {dataItm.list.map((itm, indx) => (
                  <li key={indx} className="styled-list__item">
                    {itm.link ? (
                      <a href={itm.link} className="styled-list__link">
                        {itm.item}
                      </a>
                    ) : (
                      itm.item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </>
  )
}
