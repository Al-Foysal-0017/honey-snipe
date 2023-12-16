"use client";
import React, { useRef } from 'react';
import {useInView} from "react-intersection-observer";
import styles from "./joinMsg.module.css";
import hover3d from '@/utils/hover';
import { motion } from "framer-motion";
import { slideInFromBottom } from '@/utils/motion';

const JoinMsg = () => {
  const {ref, inView} = useInView({
    triggerOnce: false
  });

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView?"visible":"hidden"}
    >
    <section style={{ overflow: 'hidden' }} ref={hero} className={styles.container}>
      <div style={{
        transform: hoverHero.transform,
      }}>
        <motion.div 
          style={{
            transform: imageHover.transform,
          }} 
          className={styles.joinMsg}
          variants={slideInFromBottom}
        >
          Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading!
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default JoinMsg;
