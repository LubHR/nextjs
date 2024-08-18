import React from 'react';

const UserPage = ({searchParams}:any) => {

    let user = JSON.parse(searchParams.data);
    return (
        <div>
            {user.email}
        </div>
    );
};

export default UserPage;