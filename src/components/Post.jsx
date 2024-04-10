import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/WilliamFilh0.png" />
          <div className={styles.authorInfo}>
            <strong>William Filho</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13" dateTime="2024-08-04 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>

        <p>
          👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          <a href=""> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </form>
    </article>
  );
}
