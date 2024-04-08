import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/WilliamFilh0.png"
            alt="Foto do Avatar"
          />
          <div className={styles.authorInfo}>
            <span>William Filho</span>
            <strong>Web Developer</strong>
          </div>
        </div>

        <time title="11 de maio às 08:13" dateTime="2024-08-04 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.component}>
        <p>Fala galera</p>

        <p>
          👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          {" "}
          <a href="">👉 jane.design/doctorcare</a>
        </p>

        <p>
          {" "}
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
