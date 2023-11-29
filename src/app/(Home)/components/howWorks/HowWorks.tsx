/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from "./howWorks.module.css"
import Container from '@/components/Container/Container'
import Image from 'next/image'

const HowWorks = () => {
  return (
    <Container className={styles.test}>
        <div className={styles.title}>how it works</div>
        <p className={styles.subtitle}>Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain. Whether you're looking to snipe upcoming launches, capitalize on arbitrage opportunities, or trade tokens on Uniswap and Pancakeswap, Honey Snipe is your gateway to maximizing profits.</p>

        <div className={styles.cards}>
            {/* CARD-01 */}
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <Image width={118} height={118} src="/imgs/svg/archer.svg" alt="" />
                </div>
                <div className={styles.cardTitle}>Snipe Launches</div>
                <p className={styles.cardDesc}>Deposit your funds, and let our sophisticated bot find the safest and most lucrative launches for you. The more you deposit, the greater your potential for profit.</p>
            </div>
            {/* CARD-02 */}
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <Image width={118} height={118} src="/imgs/svg/coins.svg" alt="" />
                </div>
                <div className={styles.cardTitle}>Snipe Launches</div>
                <p className={styles.cardDesc}>Deposit your funds, and let our sophisticated bot find the safest and most lucrative launches for you. The more you deposit, the greater your potential for profit.</p>
            </div>
            {/* CARD-03 */}
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <Image width={118} height={118} src="/imgs/svg/barChart.svg" alt="" />
                </div>
                <div className={styles.cardTitle}>Snipe Launches</div>
                <p className={styles.cardDesc}>Deposit your funds, and let our sophisticated bot find the safest and most lucrative launches for you. The more you deposit, the greater your potential for profit.</p>
            </div>
        </div>
    </Container>
  )
}

export default HowWorks