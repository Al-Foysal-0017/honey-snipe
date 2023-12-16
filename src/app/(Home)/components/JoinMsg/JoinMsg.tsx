"use client";
import React, { useRef } from 'react';
import styles from "./joinMsg.module.css";
import hover3d from '@/utils/hover';

const JoinMsg = () => {
  const hero = useRef<HTMLDivElement>(null);
  const hoverHero = hover3d(hero, {
    x: 20,
    y: -30,
    z: 20,
  });
  const imageHover = hover3d(hero, {
    x: 10,
    y: 5,
    z: 1,
  });

  return (
    <section style={{ overflow: 'hidden' }} ref={hero} className={styles.container}>
      <div style={{
        transform: hoverHero.transform,
      }}>
        <div style={{
          transform: imageHover.transform,
        }} className={styles.joinMsg}>
          Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading!
        </div>
      </div>
    </section>
  );
};

export default JoinMsg;
