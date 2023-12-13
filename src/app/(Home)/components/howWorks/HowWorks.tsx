/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from "./howWorks.module.css"
import Container from '@/components/Container/Container'
import Image from 'next/image'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'

const HowWorks = () => {
  const data = [
    {
        imgPath: "/imgs/svg/archer.svg",
        cardTitle:"Snipe Launches",
        cardDesc:"Deposit your funds, and let our sophisticated bot find the safest and most lucrative launches for you. The more you deposit, the greater your potential for profit."
    },
    {
        imgPath: "/imgs/svg/coins.svg",
        cardTitle:"Token Trading",
        cardDesc:"Trade tokens already listed on Uniswap and Pancakeswap with ease."
    },
    {
        imgPath: "/imgs/svg/barChart.svg",
        cardTitle:"Arbitrage Trading",
        cardDesc:"Snipe arbitrage opportunities on Uniswap and Pancakeswap effortlessly. Your funds dictate your potential earnings."
    },
  ]
  return (
    <Container>
        <Title className={styles.title}>how it works</Title>
        <Subtitle className={styles.subtitle}>Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain. Whether you're looking to snipe upcoming launches, capitalize on arbitrage opportunities, or trade tokens on Uniswap and Pancakeswap, Honey Snipe is your gateway to maximizing profits.</Subtitle>

        <div className={styles.cards}>
            {data.map((item, index)=>(
            <div key={index} className={styles.card}>
                <div className={styles.iconAndTitle}>
                    <div className={styles.cardIcon}>
                        <Image width={118} height={118} src={item.imgPath} alt="" />
                    </div>
                    <div className={styles.cardTitle}>{item.cardTitle}</div>
                </div>
                <p className={styles.cardDesc}>{item.cardDesc}</p>
            </div>
            ))}
        </div>
    </Container>
  )
}

export default HowWorks