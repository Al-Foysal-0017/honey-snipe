import React from 'react'
import styles from "./safety.module.css"
import Image from 'next/image'
import Title from '../Title/Title'
import Container from '@/components/Container/Container'
import Notification from '../Notifications/Notification'

const Safety = () => {
  const data = [
    {
      subtitle:"Anti-Rug Measures",
      desc:"Our bot is equipped with an anti-rug function, ensuring you participate in the safest launches."
    },
    {
      subtitle:"Certik Audited",
      desc:"Honey Snipe is audited by Certik, guaranteeing transparency and security."
    },
    {
      subtitle:"Locked Tokens",
      desc:"The Honey Snipe team has locked tokens and LP tokens, providing stability to the platform."
    }
  ]
  return (
    <div>
    <div className={styles.container}>
      {/* LEFT for Small Screen*/}
      <div className={styles.left}>
        <Container>
        <Title className={styles.title}>Safety First</Title>
        {data.map((item, index)=>(
          <div key={index} className={styles.item}>
          <div className={styles.subtitle}>{item.subtitle}</div>
          <p className={styles.desc}>
            {item.desc}
          </p>
        </div>
        ))}
        </Container>
      </div>
      {/* Right */}
      <div className={styles.right}>
        <Image className={styles.bearImg} width={444} height={444} src="/imgs/svg/saftyBear.svg" alt="bearImg" />
      </div>
    </div>
    {/* LEFT for Big Screen*/}
    <div className={styles.leftForBigScreen}>
      <div>
        <Title className={styles.titleBigScreen}>Safety First</Title>
        {data.map((item, index)=>(
          <div key={index} className={styles.itemBigScreen}>
          <div className={styles.subtitle}>{item.subtitle}</div>
          <p className={styles.desc}>
            {item.desc}
          </p>
        </div>
        ))}
      </div>
    </div>

    {/* Notification Block Part */}
    <Notification 
      title="Fees" 
      desc="Token Trading Fee: 4% of $HONEY token (fees reduce as market cap grows).Snipe Bot Fee: 2% for launching or arbitraging."
    />
    </div>
  )
}

export default Safety