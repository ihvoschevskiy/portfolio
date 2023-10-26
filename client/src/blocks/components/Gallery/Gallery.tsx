import './Gallery.css'
import { TProjectData } from '@tps/app.types'
import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  data: TProjectData[]
}

export const Gallery = React.forwardRef<HTMLDivElement, IProps>(({ data }, ref) => {
  return (
    <div ref={ref} className="gallery">
      {data.map((itm, idx) => (
        <div key={idx} className="gallery__item item">
          <Link className="item__link" to={`/projects/${itm.slug}`}>
            <div className="item__wr">
              <img src={require(`@assets/images/${itm.images[0]}`)} alt="Application preview" className="item__image" />
            </div>
            <p className="item__description">{itm.description}</p>
            <p className="item__title">{itm.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
})

Gallery.displayName = 'Gallery'
