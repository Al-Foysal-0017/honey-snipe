"use client"
import React, { useRef } from 'react'
import styles from "./joinMsg.module.css"
import SectionLayout from '../SectionLayout'
import TextSection from '../TextSection'
import hover3d from '@/utils/hover'

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
    <section style={{overflow:'hidden'}} ref={hero} className={styles.container}>
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
    // <SectionLayout>
    //       <TextSection />
    // </SectionLayout>
  )
}

export default JoinMsg


// "use client"
// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './joinMsg.module.css';

// const Marquee = () => {
//   const marqueeVariants = {
//     initial: { x: '-100%' }, // Initial position off-screen to the left
//     animate: {
//       x: ['100%', '-100%'], // Move to the right, then off-screen to the left
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: 'loop',
//           duration: 10, // Adjust duration according to your preference
//           ease: 'linear',
//         },
//       },
//     },
//   };

//   return (
//     <section className={styles.container}>
//       <div className={styles.marquee}>
//         <motion.div
//           className={styles.track}
//           variants={marqueeVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <h1>
//             Join Honey Snipe and Unlock Limitless Possibilities in Crypto
//             Trading!
//           </h1>
//         </motion.div>

//         <motion.div
//           className={styles.track}
//           variants={marqueeVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <h1>
//             Join Honey Snipe and Unlock Limitless Possibilities in Crypto
//             Trading!
//           </h1>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Marquee;
