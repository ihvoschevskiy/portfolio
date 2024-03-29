import './Modal.css'
import { Caption } from '@components/Caption/Caption'
import { CloseIco } from '@components/Icons/CloseIco'
import { TSavedColorSchema } from '@features/ThemeSwitcher/types/types'
import { getSavedScheme, getSystemScheme } from '@features/ThemeSwitcher/utils/themeSwitcher.utils'
import cn from 'classnames'
import React, { FC } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

interface IProps {
  isShown: boolean
  isSuccess: 'success' | 'error' | 'mock'
  onClose: () => void
}

export const Modal: FC<IProps> = ({ isShown, isSuccess, onClose }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null)
  const modalWrRef = React.useRef<HTMLDivElement | null>(null)
  const [theme, setTheme] = React.useState<TSavedColorSchema | undefined>()

  React.useEffect(() => {
    const savedScheme = getSavedScheme()
    setTheme(savedScheme === null ? getSystemScheme() : savedScheme)
  }, [isShown])

  React.useEffect(() => {
    const documentKeydownListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', documentKeydownListener)
    return () => {
      document.removeEventListener('keydown', documentKeydownListener)
    }
  }, [onClose])

  return createPortal(
    <CSSTransition
      nodeRef={modalWrRef}
      in={isShown}
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={300}
      classNames="modal-wr-animation"
    >
      <div ref={modalWrRef} className="modal" onClick={onClose}>
        <CSSTransition
          nodeRef={modalRef}
          in={isShown}
          appear={true}
          unmountOnExit={true}
          timeout={300}
          classNames="modal-animation"
        >
          <div ref={modalRef} className={cn('modal__in', `modal__in--${theme}`)} onClick={e => e.stopPropagation()}>
            <button className="modal__close-btn" onClick={onClose}>
              <CloseIco className="modal__close-ico" />
            </button>
            <Caption modifier="short" className="modal__caption" />
            {isSuccess === 'success' && (
              <>
                <p className="modal__message">Спасибо за проявленный интерес</p>
                <p className="modal__message">Я свяжусь с вами в ближайшее время</p>
              </>
            )}
            {isSuccess === 'error' && (
              <>
                <p className="modal__message">Что-то пошло не так</p>
                <p className="modal__message">
                  Вы можете связаться со мной по адресу{' '}
                  <a href="mailto:ihvoschevskiy@gmail.com">ihvoschevskiy@gmail.com</a>
                </p>
              </>
            )}
            {isSuccess === 'mock' && (
              <>
                <p className="modal__message">Мобильная версия сайта находится в разработке</p>
                <p className="modal__message">Спасибо за понимание</p>
              </>
            )}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>,
    document.getElementById('overlay') as HTMLElement,
  )
}
