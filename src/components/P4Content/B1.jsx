import React from 'react'
import styles from './B1.module.css'

const B1 = (props)=>{
    const{name,icons}=props
    return(
    <div >
      <div className={styles.box}>
        <img className={styles.IMG} src={icons}></img>     
        <h1>
           {name}
        </h1> 
      </div>
      <div className={styles.main}>
       <a >Order Now</a> 
      </div>   
    </div>
    )
}

export default B1