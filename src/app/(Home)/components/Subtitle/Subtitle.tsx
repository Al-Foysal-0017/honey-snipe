import React, { ReactNode } from 'react';
import styles from './subtitle.module.css';

interface SubtitleProps {
  children: ReactNode;
  className?: string; 
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <div className={`${styles.subtitle} ${className || ''}`}>
      {children}
    </div>
  );
};

export default Subtitle;

