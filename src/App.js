//import {getUsers} from 'src/service/user.service';
import Users from "./components/users/Users";
//import {useEffect, useState} from "react";
// import {getPosts} from 'src/service/post.service';
// import {Post} from "./components/posts/Posts";
// import {getComments} from 'src/service/comment.service.service';
// import {Comment} from "./components/comments/Comments";
function App() {
    return (
        <div className={'Users'}>
            <Users/>
            {/*<Users {...getUsers[0]}{getPosts[1]}{getComments[1]}/>*/}
            {/*<Users {...getUsers[1]}{getPosts[2]}{getComments[2]}/>*/}
        </div>
    );
}
export default App;
