import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Janhavi Solanki</span>
        <span className={styles.role}>Frontend · Full-Stack · Auckland NZ</span>
      </div>
    </footer>
  )
}