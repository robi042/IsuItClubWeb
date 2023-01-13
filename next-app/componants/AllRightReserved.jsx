import React from 'react'
import styles from "../styles/AllRight.module.css"


const AllRightReserved = () => {
      const handleClick = () => {
            window.location.href = 'https://www.facebook.com/rhrobi.2015/';
          };
      
  return (
    <div className={styles.container}>
      <div className={styles.text}>&copy; All rights reserved</div>
      <div onClick={handleClick} className={styles.owner}>Robi</div>
    </div>
    
  )
}

export default AllRightReserved