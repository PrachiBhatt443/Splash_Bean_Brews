import React from 'react'
import styles from './P2Content.module.css'
import Button from '../Button/Button'

const P2Content = () => {
  return (
    <div>
      <div className={styles.main}>
        
      <img className={styles.IMG} src='/img/nathan-dumlao-zUNs99PGDg0-unsplash.jpg'/>
      <section>

        <div className={styles.H1}>
           Coffee Heaven
        </div>

        <div className={styles.H5}>
            Experience The Rich And Bold Flavors Of Our   Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right! 
        </div>

        <div className={styles.btn}>
            {/* <Button text="View All"/> */}
            <Button isOut={true} text="View All"/>
        </div>
      </section>
    </div>
    </div>
  )
}
export default P2Content