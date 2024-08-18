import React from 'react';
import Avatar from 'react-avatar';

const ChatHeader = ({ chatPartner }) => (
    <div className="flex justify-between items-center mb-4">
        
        <h2 className="text-lg md:text-xl font-semibold">
            {chatPartner ? `Chat with ${chatPartner.displayName}` : 'Select a chat'}
        </h2>
        <div className="flex items-center">
            <span className="text-xs md:text-sm">Members:</span>
            <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">+</button>
        </div>
    </div>
);

export default ChatHeader;
