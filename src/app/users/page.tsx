import React from 'react';
import {getAlllUsers} from "@/app/services/api.service";
import Link from "next/link";

const UsersPage = async () => {

    let allusers = await getAlllUsers()

    return (
        <div>
            <ul>
            {allusers.map(user =><li key={user.id}>{user.id} -
                <Link href={{pathname:'/users/'+user.id,query:{data:JSON.stringify(user)}}}> {user.name}</Link>
            </li>)}
            </ul>
        </div>
    );
};

export default UsersPage;