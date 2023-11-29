import React from 'react'
import styles from "./tokenomics.module.css"
import Image from 'next/image'

const Tokenomics = () => {
  return (
    <section>
      <div className={styles.notification}>
        <div className={styles.notificationTitle}>Fees</div>
        <p className={styles.notificationDesc}>Token Trading Fee: 4% of $HONEY token (fees reduce as market cap grows).
          Snipe Bot Fee: 2% for launching or arbitraging.
        </p>
      </div>

      <div className={styles.tokenomics}>
        <div className={styles.left}>
          <div className={styles.title}>Tokenomics</div>
          <p className={`${styles.subtitle} ${styles.Holders}`}>Holders: 20% (1,800,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Liquidity}`}>Liquidity: 13.7% (1,234,285 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Airdrop}`}>Airdrop: 1% (90,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Team}`}>Team: 10% (900,000 Honey, 6% locked for 10 years)</p>
          <p className={`${styles.subtitle} ${styles.Relaunch}`}>Relaunch Burn: 1% (90,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Treasury}`}>Treasury (Liquid): 4% (360,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Treasury}`}>Treasury (Locked): 50.28% (4,525,715 Honey)</p>
        </div>
        <div className={styles.right}>
          <Image width={278} height={323} src="/imgs/svg/sheild.svg" alt="Hero Image" />
          <div className={styles.imgTitle}>Liquidity: 13.7% (1,234,285 Honey)</div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics