import React from 'react'
import Avatar from 'react-avatar';


export const Message = ({ message, isSender }) => (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mt-2`}>
        <div className={`p-2 rounded-lg ${isSender ? 'bg-gray-200' : 'bg-white'} max-w-xs`}>
            <p className="text-sm">{message.text}</p>
            <span className="text-xs text-gray-600">{message.timestamp?.toDate().toLocaleTimeString()}</span>
            <p className="text-xs text-gray-500 mt-1">Sent by: {message.sender}</p>
        </div>
        {!isSender && (
            <Avatar name={message.sender.split('@')[0]} size="30" round className="ml-2" />
        )}
    </div>
);
