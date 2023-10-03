import PostBox from "components/posts/PostBox";
import PostForm from "components/posts/PostForm";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likeCount?: number;
  comments?: any[];
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@example.com",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quo architecto facere quia porro numquam voluptatem sunt delectus harum molestiae molestias quam accusantium, eveniet voluptatibus nisi nam assumenda totam!",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@example.com",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quo architecto facere quia porro numquam voluptatem sunt delectus harum molestiae molestias quam accusantium, eveniet voluptatibus nisi nam assumenda totam!",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@example.com",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quo architecto facere quia porro numquam voluptatem sunt delectus harum molestiae molestias quam accusantium, eveniet voluptatibus nisi nam assumenda totam!",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@example.com",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quo architecto facere quia porro numquam voluptatem sunt delectus harum molestiae molestias quam accusantium, eveniet voluptatibus nisi nam assumenda totam!",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "5",
    email: "test@example.com",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quo architecto facere quia porro numquam voluptatem sunt delectus harum molestiae molestias quam accusantium, eveniet voluptatibus nisi nam assumenda totam!",
    createdAt: "2023-08-30",
    uid: "123123",
  },
];

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab ">Following</div>
      </div>
      <PostForm />

      <div className="post">
        {posts.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
