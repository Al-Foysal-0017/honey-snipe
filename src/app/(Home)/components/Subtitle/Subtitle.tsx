"use client"
// import React, { ReactNode } from 'react';
// import {motion, AnimatePresence} from "framer-motion"
// import styles from './subtitle.module.css';

// interface SubtitleProps {
//   children: ReactNode;
//   className?: string; 
// }

// const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <AnimatePresence>
//                   <motion.div 
//                     initial={{opacity: 0, x:-15}}
//                     animate={{opacity: 1, x:0}}
//                     exit={{opacity:0, x:-15}}
//                     transition={{delay: 1}}
//                     className={`${styles.subtitle} ${className || ''}`}
//                   >
//                     {children}
//                   </motion.div>
//                 </AnimatePresence>
//     </div>
//   );
// };

// export default Subtitle;



import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './subtitle.module.css';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const TitleGSAP: React.FC<TitleProps> = ({ children, className }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement) {
      gsap.from(titleElement, {
        opacity: 0,
        x: -15,
        // duration: 1,
        delay: 1,
        onComplete: () => {
          gsap.to(titleElement, { opacity: 1, x: 0 }); // Set opacity and x back to their final values
        },
      });
    }
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <div ref={titleRef} className={`${styles.subtitle} ${className || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default TitleGSAP;

