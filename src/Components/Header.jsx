import styles from './Header.module.css'
import igniteLogo from '../Assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="logotipo"/>
    </header>
  )
}

export default Header