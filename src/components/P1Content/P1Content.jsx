import React from 'react'
import styles from './P1Content.module.css'
import Button from '../Button/Button'

const P1Content = () => {
  return (
    <div className={styles.main}>
      <section>

        <div className={styles.H1}>
            Discover The Art Of Perfect Coffee
        </div>

        <div className={styles.H5}>
            Experience The Rich And Bold Flavors Of Our   Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right! 
        </div>

        <div className={styles.btn}>
            <Button text="Order Now"/>
            <Button isOut={true} text="EXPLORE MORE"/>
        </div>
        {/* <div className={styles.tri}>
          50+
          20+
          <div >
            20+
          </div>
          <div>
            2k+
          </div>
        </div> */}
        
      </section>
      
      
      <img className={styles.IMG} src='/img/Split.jpg'/>
    
    </div>
  )
}

export default P1Content
