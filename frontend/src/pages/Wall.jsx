import PagesHeader from "../components/Headers/PagesHeader";
import NewPostBtn from "../components/Buttons/NewPostBtn";
import PostList from "../components/Posts/PostList";
//import {useState, useEffect} from 'react';

function Wall() {
  /*const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      setauthenticated(auth);
    }}, []);
    if (!authenticated) {
      //redirect
    }else{*/
      return (
        <div>
          <PagesHeader />
          <NewPostBtn />
          <PostList />
        </div>
        )
    }
//}

export default Wall;