"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './tokenomics.module.css';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Title from '../Title/Title';

const Tokenomics = () => {
  // Define animation variants
  const bounceVariant = {
    initial: { y: 0 },
    animate: { y: -20, transition: { repeat: Infinity, duration: 0.5, repeatType: 'mirror' } },
  } as const;

  const rotateVariant = {
    initial: { rotateY: 0 },
    animate: { rotateY: 360, transition: {repeat: Infinity, duration: 2, ease: 'easeInOut' } },
  } as const;

  return (
    <Container>
      <div className={styles.tokenomics}>
        <div className={styles.left}>
          <Title className={styles.title}>Tokenomics</Title>
          <p className={`${styles.subtitle} ${styles.Holders}`}>Holders: 20% (1,800,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Liquidity}`}>Liquidity: 13.7% (1,234,285 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Airdrop}`}>Airdrop: 1% (90,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Team}`}>Team: 10% (900,000 Honey, 6% locked for 10 years)</p>
          <p className={`${styles.subtitle} ${styles.Relaunch}`}>Relaunch Burn: 1% (90,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.Treasury}`}>Treasury (Liquid): 4% (360,000 Honey)</p>
          <p className={`${styles.subtitle} ${styles.TreasuryLocked}`}>Treasury (Locked): 50.28% (4,525,715 Honey)</p>
        </div>
        <div className={styles.right}>
          <motion.div className={styles.imageContainer} variants={bounceVariant} initial="initial" animate="animate">
            <motion.div className={styles.sheildImgContainer} variants={rotateVariant} initial="initial" animate="animate">
              <Image className={styles.sheildImg} width={278} height={323} src="/imgs/svg/sheild.svg" alt="sheild Image" />
            </motion.div>
          </motion.div>
          <div className={`${styles.subtitle} ${styles.imgTitle}`}>Liquidity: 13.7% (1,234,285 Honey)</div>
        </div>
      </div>
    </Container>
  );
};

export default Tokenomics;
