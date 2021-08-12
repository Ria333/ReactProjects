import {useEffect, useState} from 'react';
import {getComment} from 'src/service/comment.serviceomment.service';

export default function Comment() {
    let [comment, setComment] = useState([]);
    useEffect(() => {
        getComment()
                .then(value => setUser)
                ([...value]));
        }, []
    )
    ;
    return (<div>
            {comment.map(value =>
                <Comment item={value} key={value.id}/>)}
        </div>
    );
}