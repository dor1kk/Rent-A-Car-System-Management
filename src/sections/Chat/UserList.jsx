import React from 'react';
import Avatar from 'react-avatar';
import { UserAvatar } from '../../components/Chat/UserAvatar';

const UserList = ({ users, selectedChat, onChatClick }) => {
    return (
        <div className="p-2 md:p-4 md:h-96 h-24 overflow-y-auto">
            <div className="flex overflow-x-auto space-x-2 md:hidden">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            className="flex-shrink-0 cursor-pointer"
                            key={user.id}
                            onClick={() => onChatClick(user)}
                        >
                            <Avatar
                                name={user.displayName}
                                size="40"
                                round
                                className="object-cover"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No users found</p>
                )}
            </div>
            <div className="hidden md:block">
                {users.length > 0 ? (
                    users.map((user) => (
                        <UserAvatar
                            key={user.id}
                            user={user}
                            onClick={() => onChatClick(user)}
                            isSelected={selectedChat?.includes(user.email)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-600">No users found</p>
                )}
            </div>
        </div>
    );
};

export default UserList;
