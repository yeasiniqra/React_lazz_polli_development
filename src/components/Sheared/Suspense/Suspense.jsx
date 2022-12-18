import React from 'react'
import Preloader from '../Preloader/Preloader'
import styles from './Suspense.module.css'

const Suspense = ({className=""}) => {
  return (
    <div className={`${styles.suspense} ${className}`}>
            <Preloader />
        </div>
  )
}

export default Suspense