import React, { ReactNode } from 'react';
import styles from './pageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string; 
}

const Container: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    // <div className={`${styles.container} ${className || ''}`}>
    <div className={styles.container}>
      <main className={className || ''}>{children}</main>
    </div>
  );
};

export default Container;

