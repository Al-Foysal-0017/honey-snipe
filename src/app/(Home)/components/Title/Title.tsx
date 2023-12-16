import React, { ReactNode } from 'react';
import styles from './title.module.css';

interface TitleProps {
  children: ReactNode;
  className?: string; 
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={`${styles.title} ${className || ''}`}>
      {children}
    </div>
  );
};

export default Title;

