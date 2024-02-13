import React from 'react'
import Navbar from './Navbar/Navbar'
import P1Content from './P1Content/P1Content'
import styles from './Navbar/Navbar.module.css'
// splash\src\components\Navbar\Navbar.module.css

const Page1 = () => {
  return (
    <div className={styles.p1} >
      <Navbar />
      <P1Content/>
    </div>
  )
}

export default Page1
