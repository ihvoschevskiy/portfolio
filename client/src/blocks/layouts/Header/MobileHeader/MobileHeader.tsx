import './MobileHeader.css'
import { MobileMenuIco } from '@components/Icons/MobileMenuIco'
import { Logo } from '@components/Logo/Logo'
import { Modal } from '@components/Modal/Modal'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const MobileHeader: FC<IProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isShownModal, setIsShownModal] = React.useState(false)

  const onClickHandle = () => {
    setIsOpen(!isOpen)
    setIsShownModal(!isShownModal)
  }

  const onCloseModal = () => {
    setIsShownModal(false)
    setIsOpen(false)
  }

  return (
    <header className={cn('header-m', className)}>
      <Logo />
      <button onClick={onClickHandle} className="header-m__menu-btn">
        <MobileMenuIco type={isOpen === false ? 'open' : 'close'} className="header-m__menu-ico" />
        <Modal isShown={isShownModal} isSuccess="mock" onClose={onCloseModal} />
      </button>
    </header>
  )
}
