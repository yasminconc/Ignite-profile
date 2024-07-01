import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

const Comment = ({ content, onDeleteComment }) => {

    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        //sempre que quiser autalizar uma informação, essa informaçõa depende do valor que ela tinha anteriormente, ou seja depende dela mesma é recomendado usar esse padrão de funções
        setLikeCount((state) => {
            return state + 1
        })
    }
    
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="http://github.com/yasminconc.png" alt="" />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Yasmin Conceição</strong>

                        <time title='13 de maio ás 18:22' dateTime="2024-13-06 08:18:22">
                            Cerca de 1h atrás
                        </time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer className=''>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

export default Comment