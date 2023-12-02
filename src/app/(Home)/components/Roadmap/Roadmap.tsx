import React from 'react'
import styles from "./roadmap.module.css"
import Image from 'next/image'
import Notification from '../Notifications/Notification'
import Container from '@/components/Container/Container'
import Title from '../Title/Title'

const Roadmap = () => {
  return (
    <div className={styles.container}>
        <div className={styles.roadmapContainer}>
        <div className={styles.roadmap}>
          <Title className={styles.title}>Roadmap</Title>
          <Image className={styles.beesHouseImg} width={270} height={396} src="/imgs/svg/beesHouse.svg" alt="" />
          <div>
            <Image 
              className={styles.lineForRoadmapImg} 
              width={200}
              height={100} 
              layout="responsive" 
              src="/imgs/svg/lineForRoadmap.svg" 
              alt="" 
            />
            {/* <Image className={styles.bee1Img} width={68} height={68} src="/imgs/svg/bee1.svg" alt="" /> */}
          </div>
          {/* <Image className={styles.bee2Img} width={68} height={68} src="/imgs/svg/bee2.svg" alt="" /> */}
          {/* <Image className={styles.bee3Img} width={68} height={68} src="/imgs/svg/bee3.svg" alt="" /> */}
          
          
          
          {/* <div>
            <ul>
              <div>Q4(2023)-Early Q1(2024)</div>
              <li>Private Sale</li>
              <li>Public Sale</li>
              <li>Certik Audit</li>
              <li>List $HONEY on Uniswap & Pancakeswap</li>
              <li>Launch Web dApp</li>
              <li>Introduce Sniping Telegram Bot</li>
            </ul>

            <ul>
              <div>Q4(2023)-Early Q1(2024)</div>
              <li>Private Sale</li>
              <li>Public Sale</li>
              <li>Certik Audit</li>
              <li>List $HONEY on Uniswap & Pancakeswap</li>
              <li>Launch Web dApp</li>
              <li>Introduce Sniping Telegram Bot</li>
            </ul>

            <ul>
              <div>Q4(2023)-Early Q1(2024)</div>
              <li>Reach 10,000 Users</li>
              <li>Achieve 20,000 Holders</li>
              <li>Introduce Copy Snipe Feature</li>
            </ul>

            
            <ul>
              <div>Early Q3(2024)</div>
              <li>Support New Chains (Major Chains)</li>
              <li>Implement DeFi Solutions</li>
              <li>Introduce Copy Futures Trade on dApps (DYDX, GMX, etc.)</li>
            </ul>


          </div> */}

          
        </div>
        </div>
        <Notification 
          title="Liquidity" 
          desc="Honey Snipe's liquidity comprises 1,234,285 $Honey and $864,000 (launch price 0.7$), with an initial market cap of $2.4 million."
        />
    </div>
  )
}

export default Roadmap