import React from 'react'
import styles from "./page.module.css"
import PageWrapper from '@/components/PageWrapper/PageWrapper'

const Whitepaper = () => {
  return (
    <PageWrapper>
      <div className={styles.whitepaper}>
        <iframe className={styles.pdf} src='/Honey Snipe Pitchdeck.pdf' />
      </div>
    </PageWrapper>
  )
}

export default Whitepaper