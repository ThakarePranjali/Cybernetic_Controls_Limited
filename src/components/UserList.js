import React, { useState } from 'react';
import UserDetail from './UserDetail';

const UserList = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const filteredUsers = users.filter((user) =>
        `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search users by name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id} onClick={() => handleUserClick(user)}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <div className="user-detail">
                    <UserDetail user={selectedUser} />
                    <button onClick={() => setSelectedUser(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default UserList;