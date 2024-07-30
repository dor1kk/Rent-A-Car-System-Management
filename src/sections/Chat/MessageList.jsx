import React, { useRef, useEffect } from 'react';
import { Message } from '../../components/Messages';

const MessageList = ({ messages, user }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-2 bg-gray-50 mb-4">
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                    isSender={message.sender === user.email}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;
