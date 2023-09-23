import React from 'react'
import styles from './P5Content.module.css'

const Review = (props) => {
    const{content,name,stars,IMG}=props;
  return (
    <div>
        <icon/>
        <div className={styles.box}>
        <img className={styles.IMG} src={icons}></img> 
        <h1>
           {name}
        </h1> 
      </div>
    <icon/>

    </div>
    
  )
}

export default Review
