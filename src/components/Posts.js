
import { PostCards } from "./PostCards";

function Posts() {
  const posts = ([
    { id: 1, userName: "Abdulqadir Mohamed", text: "lorem", reaction: 1 },
    { id: 2, userName: "Ahmed Jama", text: "lorem", reaction: 23 },
  ]);
  return (
    <div className="">
      {posts.map((post) => (
        <PostCards key={post.id} userName={post.userName} reaction={post.reaction} />
      ))}
    </div>
  );
}

export default Posts;
