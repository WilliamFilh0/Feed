import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="William Filho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa magni dicta eaque debitis? Laborum nemo quas ab aut maxime earum, aspernatur dolorem veniam esse unde porro voluptatem sit voluptatum."
          />

          <Post author="Grabriel Buzzi" content="Novo Post" />
        </main>
      </div>
    </div>
  );
}
