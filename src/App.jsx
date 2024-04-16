import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: { urldoAvatar: "", nsme: "", role:  }
//published_at: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/WilliamFilh0.png",
      name: "William Filho",
      role: "CTO",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que  fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare ",
      },

      { type: "link", content: " jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator CTO",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que  fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: " jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

//iteração - repetir alguma coisa. Percoreer o array epra cada posição do array eu vou fazer alguma coisa

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
