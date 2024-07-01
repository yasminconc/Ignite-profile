import { PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import Avatar from './Avatar'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        />

        <div className={styles.profile}>
            <Avatar src="http://github.com/yasminconc.png"/>

            <strong>Yasmin Conc</strong>
            <span>Web developer</span>
        </div>

        <footer>
            <a href="#">
              <PencilLine
                size={20}
              />
              Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}

export default Sidebar