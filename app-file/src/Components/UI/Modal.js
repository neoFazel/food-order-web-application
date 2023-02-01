import React from 'react'
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

const Backdrop = () => {
  return(
    <div className={styles.backdrop}></div>
  ) 
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  )
}


function Modal(props) {
  const portalElement = document.getElementById('modal');
  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  )
}

export default Modal;