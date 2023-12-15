"use client"
import React, { useRef } from "react";
import styles from "./hero.module.css";
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import hover3d from "@/utils/hover";

const Hero = () => {
  // framer-motion1
  const hero = useRef<HTMLDivElement>(null);
  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });
  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  // framer-motion2
  const hero2 = useRef<HTMLDivElement>(null);
  const hoverHero2 = hover3d(hero2, {
    y: 30,
    x: -40,
    z: 11,
  });
  const imageHover2 = hover3d(hero2, {
    y: 20,
    x: -5,
    z: 30,
  });
  
  return (
    <div ref={hero} className={styles.hero}>
      <div ref={hero2} className={styles.heroSection}>
        <Container className={styles.wrapper}>
          <div 
            style={{
              transform: hoverHero2.transform,
            }}
            className={styles.leftSide}
          >
            <div 
              style={{
                transform: imageHover2.transform,
              }}
            >
              <Title className={styles.title}>
                Unlock the Power of Honey Snipe
              </Title>
              <Subtitle className={styles.subtitle}>
                Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.
              </Subtitle>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div
              style={{
                transform: hoverHero.transform,
              }}
            >
              <Image
                src="/imgs/svg/heroBear.svg"
                width={456}
                height={483}
                alt="hero"
                className={styles.heroImg}
                style={{
                  transform: imageHover.transform,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
