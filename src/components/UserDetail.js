import React from 'react';

const UserDetail = ({ user }) => {
    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.company.address}</p>
            <p>Department: {user.company.department}</p>
            <p>Title: {user.company.title}</p>
        </div>
    );
};

export default UserDetail;