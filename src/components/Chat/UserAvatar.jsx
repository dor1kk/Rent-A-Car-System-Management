import React from 'react'
import Avatar from 'react-avatar';


export const UserAvatar = ({ user, onClick, isSelected }) => (
    <div
        className={`flex items-center p-2 cursor-pointer ${isSelected ? 'bg-gray-100' : ''}`}
        onClick={onClick}
    >
        <Avatar name={user.displayName} size="40" round className="object-cover" />
        <div className="ml-2">
            <h4 className="font-semibold text-sm">{user.displayName}</h4>
            <p className="text-gray-600 text-xs">Last message...</p>
        </div>
    </div>
);

