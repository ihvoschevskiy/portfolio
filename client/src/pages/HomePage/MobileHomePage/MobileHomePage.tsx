import './MobileHomePage.css'
import { Caption } from '@components/Caption/Caption'
import { Title } from '@components/Title/Title'
import { Header } from '@layouts/Header/Header'
import cn from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { FC, useRef } from 'react'

interface IProps {
  className?: string
}

gsap.registerPlugin(ScrollTrigger)

export const MobileHomePage: FC<IProps> = ({ className }) => {
  const homeRef = useRef<HTMLDivElement | null>(null)
  const captionRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)

  React.useLayoutEffect(() => {
    gsap.to(homeRef.current, {
      scrollTrigger: {
        trigger: homeRef.current,
        start: 'top top',
        end: 'center',
        pin: true,
      },
    })

    gsap.to(captionRef.current, {
      y: '-250',
      duration: 2,
      scrollTrigger: {
        trigger: captionRef.current,
        start: 'top 80%',
        end: '+=1000',
        scrub: true,
      },
    })

    gsap.to([titleRef.current, captionRef.current], {
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 10%',
        end: 'center',
        scrub: true,
      },
    })
    const ctx = gsap.context(() => {
      const apps = gsap.utils.toArray<HTMLDivElement>('.box')

      apps.forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: 1,
        })
      })
    }, galleryRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={cn('home-m', 'container', className)}>
      <Header />
      <main ref={homeRef} className="home-m__main">
        <Title ref={titleRef} className="home-m__title" />
        <Caption ref={captionRef} modifier="medium" className="home-m__caption-wr" />
      </main>
      <div ref={galleryRef} className="gallery">
        <div className="box" style={{ width: '100%', height: '200px', backgroundColor: 'red' }}>
          first
        </div>
        <div className="box" style={{ width: '100%', height: '200px', backgroundColor: 'blue' }}>
          second
        </div>
        <div className="box" style={{ width: '100%', height: '200px', backgroundColor: 'green' }}>
          third
        </div>
        <div className="box" style={{ width: '100%', height: '200px', backgroundColor: 'yellow' }}>
          fourth
        </div>
      </div>
    </div>
  )
}
