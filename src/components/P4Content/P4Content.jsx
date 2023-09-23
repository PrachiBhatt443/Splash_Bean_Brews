import React from 'react'
import styles from './P4Content.module.css'
import B1 from './B1'

const P4Content = () => {
  return (
    <div className={styles.main}>
      <div className={styles.H1}>
            Best Selling Items
        </div>
        <div className={styles.H5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis harum ipsum aperiam magni. 
        </div>
        <div className={styles.nav1}>
            <h2> All</h2>
            <h2> Black </h2>
            <h2> Espresso </h2>
            <h2> Doppio </h2>
        </div>
        <div className={styles.nav}>
            <B1 name='Cappuccino' icons='/img/icon1.jpg'/>
            <B1 name='Americano'  icons='/img/icon2.jpg'/>
            <B1 name='Espresso' icons='/img/icon3.jpg'/>
            <B1 name='Doppio' icons='/img/icon4.jpg'/>
        </div>
    </div>
  )
}
export default P4Content