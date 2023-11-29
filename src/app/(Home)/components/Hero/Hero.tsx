import React from 'react'
import styles from "./hero.module.css"
import Image from 'next/image'
import Container from '@/components/Container/Container'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroSection}>
          <Container className={styles.wrapper}>
              <div className={styles.leftSide}>
                  <div className={styles.title}>Unlock the Power of Honey Snipe</div>
                  <p className={styles.subtitle}>Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.</p>
              </div>
              <div className={styles.rightSide}>
                  <Image className={styles.heroImg} width={456} height={483} src="/imgs/svg/heroBear.svg" alt="Hero Image" />
              </div>
          </Container>
        </div>
    </div>
  )
}

export default Hero