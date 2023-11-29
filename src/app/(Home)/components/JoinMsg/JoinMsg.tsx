import React from 'react'
import styles from "./joinMsg.module.css"

const JoinMsg = () => {
  return (
    <section>
      <div className={styles.notification}>
        <div className={styles.notificationTitle}>Fees</div>
        <p className={styles.notificationDesc}>Token Trading Fee: 4% of $HONEY token (fees reduce as market cap grows).
          Snipe Bot Fee: 2% for launching or arbitraging.
        </p>
      </div>

      <div className={styles.joinMsg}>
        Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading!
      </div>
    </section>
  )
}

export default JoinMsg