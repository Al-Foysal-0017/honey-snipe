"use client"
// import React, { ReactNode } from 'react';
// import {motion, AnimatePresence} from "framer-motion"
// import styles from './title.module.css';

// interface TitleProps {
//   children: ReactNode;
//   className?: string; 
// }

// const Title: React.FC<TitleProps> = ({ children, className }) => {
//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <AnimatePresence>
//                   <motion.div 
//                     initial={{opacity: 0, x:-15}}
//                     animate={{opacity: 1, x:0}}
//                     exit={{opacity:0, x:-15}}
//                     transition={{delay: 0.5}}
//                     className={`${styles.title} ${className || ''}`}
//                   >
//                     {children}
//                   </motion.div>
//                 </AnimatePresence>
//       {/* {children} */}
//     </div>
//   );
// };

// export default Title;



// components/TitleGSAP.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './title.module.css';

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
        delay: 0.5,
        onComplete: () => {
          gsap.to(titleElement, { opacity: 1, x: 0 }); // Set opacity and x back to their final values
        },
      });
    }
  }, []);

  return (
    <div  style={{ overflowX: 'auto' }}>
      <div ref={titleRef} className={`${styles.title} ${className || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default TitleGSAP;
