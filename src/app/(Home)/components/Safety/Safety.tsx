import React from 'react'
import styles from "./safety.module.css"
import Image from 'next/image'

const Safety = () => {
  return (
    <section className={styles.container}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.title}>Safety First</div>
        
        {/* ITEM-01 */}
        <div className={styles.item}>
          <div className={styles.subtitle}>Anti-Rug Measures</div>
          <p className={styles.desc}>
            Our bot is equipped with an anti-rug function, ensuring you participate in the safest launches.
          </p>
        </div>
        {/* ITEM-01 */}
        <div className={styles.item}>
          <div className={styles.subtitle}>Anti-Rug Measures</div>
          <p className={styles.desc}>
            Our bot is equipped with an anti-rug function, ensuring you participate in the safest launches.
          </p>
        </div>
        {/* ITEM-01 */}
        <div className={styles.item}>
          <div className={styles.subtitle}>Anti-Rug Measures</div>
          <p className={styles.desc}>
            Our bot is equipped with an anti-rug function, ensuring you participate in the safest launches.
          </p>
        </div>
      </div>
      {/* Right */}
      <div className={styles.right}>
        <Image width={444} height={444} src="/imgs/svg/saftyBear.svg" alt="Hero Image" />
      </div>
    </section>
  )
}

export default Safety