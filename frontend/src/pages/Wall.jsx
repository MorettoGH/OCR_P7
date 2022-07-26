import PagesHeader from "../components/PagesHeader";
import NewPostBtn from "../components/NewPostBtn";
import WallCard from "../components/WallCard";
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
          <WallCard />
        </div>
        )
    }
//}

export default Wall;