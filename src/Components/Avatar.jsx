import styles from './Avatar.module.css'

const Avatar = ({ hasBorder = true, src}) => {

  return (
    <div>
        <img 
            className={hasBorder ? styles.avatarWhitBorder: styles.avatar} 
            src={src}
        />
    </div>
  )
}

export default Avatar