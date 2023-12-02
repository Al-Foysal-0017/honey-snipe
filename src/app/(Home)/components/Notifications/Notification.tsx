import React from 'react'
import styles from "./notifications.module.css"
import Title from '../Title/Title'

interface NotificationProps{
    title: string;
    desc: string;
}

const Notification:React.FC<NotificationProps> = ({title, desc}) => {
  return (
    <div className={styles.container}>
        <div className={styles.notification}>
        <Title className={styles.notificationTitle}>{title}</Title>
        <div className={styles.notificationDesc}>{desc}</div>
    </div>
    </div>
  )
}

export default Notification
