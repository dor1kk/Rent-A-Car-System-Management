import React from 'react';
import UserList from './UserList';

const ChatSidebar = ({ users, selectedChat, onChatClick }) => (
    <div className="w-full md:w-1/5 border-r border-gray-300">
        <div className="p-2 md:p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-semibold">Chats</h2>
                <button className="bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base">New</button>
            </div>
            <input
                type="text"
                placeholder="Search here"
                className="mt-2 md:mt-4 w-full border border-gray-300 rounded-lg px-2 py-1 md:px-4 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
        </div>
        <UserList users={users} selectedChat={selectedChat} onChatClick={onChatClick} />
    </div>
);

export default ChatSidebar;
