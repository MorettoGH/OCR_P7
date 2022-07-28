import PagesHeader from "../components/Headers/PagesHeader";
import NewPostBtn from "../components/Buttons/NewPostBtn";
import PostCard from "../components/Posts/PostCard";

function Wall() {
    return (
      <div>
        <PagesHeader />
        <NewPostBtn />
        <PostCard />
      </div>
      )
}

export default Wall;