import {useEffect, useState} from 'react';
import {getUser} from "../../service/user.service";


export default function User({item:userItem}) {
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(userItem.id)
                .then(value => setUser({...value}));
        }, [userItem.id]);
    return (
        <div>
            {user.id}
            {user.name}
        </div>
    );
}