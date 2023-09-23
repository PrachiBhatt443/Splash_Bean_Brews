import React from 'react'
import styles from './P3Content.module.css'
import Button from '../Button/Button'

const P3Content = () => {
  return (
    <div>
      <div className={styles.main}>
      <section >

        <div className={styles.H1}>
           Jean's Coffee
        </div>

        <div className={styles.H5}>
            Experience The Rich And Bold Flavors Of Our   Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right! 
        </div>

        <div className={styles.btn}>
            <Button isOut={true} text="VIEW ALL"/>
        </div>

      </section>
      
      <img className={styles.IMG} src='img/jeremy-yap-jn-HaGWe4yw-unsplash.jpg'/>
    
    </div>
    </div>
  )
}


export default P3Content



