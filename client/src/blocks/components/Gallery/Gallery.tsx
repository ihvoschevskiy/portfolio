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
          <div className="item__wr">
            <img src={require(`@assets/images/${itm.images[0]}`)} alt="Application preview" className="item__image" />
          </div>
          <p className="item__description">{itm.description}</p>
          <Link className="item__link" to={`/projects/${itm.slug}`}>
            {itm.title}
          </Link>
        </div>
      ))}
    </div>
  )
})

Gallery.displayName = 'Gallery'
