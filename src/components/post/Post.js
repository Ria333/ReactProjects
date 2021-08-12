import {useEffect, useState} from 'react';
import {getPost} from 'src/service/post.service';

export default function Post() {
    let [post, setPost] = useState([]);
    useEffect(() => {
            getPost()
                .then(value => setUser)
                ([...value]));
        }, []
    )
    ;
    return (<div>
            {post.map(value =>
                <Post item={value} key={value.id}/>)}
        </div>
    );
}