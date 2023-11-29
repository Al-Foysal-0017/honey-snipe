import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <Container className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image
                        src="/imgs/svg/logo.svg"
                        alt=""
                        width={240}
                        height={37}
                        style={{marginTop:"10px"}}
                    />
                </div>
                <div className={styles.desc}>
                    Welcome to Honey Snipe, your go-to hybrid bot for navigating the world of crypto launches and arbitrage on both the Ethereum and Binance Smart Chain.
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    <div className={styles.linksHeader}>Useful Links</div>
                    <ul className={styles.ul}>
                        <li className={styles.link}>Home</li>
                        <li className={styles.link}>About Us</li>
                        <li className={styles.link}>Career</li>
                        <li className={styles.link}>Whitepaper</li>
                    </ul>
                </div>
                <div className={styles.community}>
                    <div className={styles.communityHeader}>Our Community</div>
                   
                    <div className={styles.communityLinks}>
                        <span className={styles.communityLink}>
                            <Image className={styles.communityImg} width={20} height={20} src="/imgs/svg/instagram.svg" alt="" />
                        </span>
                        <span className={styles.communityLink}>
                            <Image className={styles.communityImg} width={20} height={20} src="/imgs/svg/linkedin.svg" alt="" />
                        </span>
                        <span className={styles.communityLink}>
                            <Image className={styles.communityImg} width={20} height={20} src="/imgs/svg/youtube.svg" alt="" />
                        </span>
                        <span className={styles.communityLink}>
                            <Image className={styles.communityImg} width={20} height={20} src="/imgs/svg/telegram.svg" alt="" />
                        </span>
                        <span className={styles.communityLink}>
                            <Image className={styles.communityImg} width={20} height={20} src="/imgs/svg/twitter.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </Container>

        <div className={styles.copyright}>
            © Copyright 2023 , All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer