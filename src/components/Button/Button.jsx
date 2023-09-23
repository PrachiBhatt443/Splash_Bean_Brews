import React from 'react'
import styles from './Button.module.css'

const Button = ({isOut,icon,text,...rest}) => {
  return (
    <button
    {...rest} className={isOut?styles.outline_btn:styles.primary_btn}>
        {icon}
        {text}

    </button>
  )
}

export default Button
