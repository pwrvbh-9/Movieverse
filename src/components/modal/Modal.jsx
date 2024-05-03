import React from 'react'
import PropTypes from 'prop-types'

import './modal.scss'

import { useState, useEffect, useRef } from 'react'


const Modal = props => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}


export const ModalContent = props => {

    const [isActive, setIsActive] = useState(true)

    const contentRef = useRef(null)

    const closeModal = () => {

        
            contentRef.current.parentNode.classList.remove('active');

        
        setIsActive(false);
        if (props.onClose) props.onClose();
    }

    return (
        <div className={`modal__content ${isActive ? 'active' : ''}`} ref={contentRef}>
            {props.children}
            <div className='modal__content__close' onClick={closeModal}>
                <i className='bx bx-x'></i>
            </div>
        </div>
    )
}

ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal