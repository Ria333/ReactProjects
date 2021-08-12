import {Comment} from "./components/comment/Comment";
import {useEffect, useState} from 'react';
import {getComments, getComment} from 'src/service/comment.service.service';

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
            getComments().then(value => setComments
            ([...value]));
        }, []
    )
    ;
    return (<div>
            {comments.map(value =>
                <Comment item={value} key={value.id}/>)}
        </div>
    );
}