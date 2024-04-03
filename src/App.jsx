import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="William Filho"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa magni dicta eaque debitis? Laborum nemo quas ab aut maxime earum, aspernatur dolorem veniam esse unde porro voluptatem sit voluptatum."
      />

      <Post author="Grabriel Buzzi" content="Novo Post" />
    </div>
  );
}
