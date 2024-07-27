import React, { useState, useEffect } from 'react';
import { firestore } from '../../backend/firebaseConfig';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState('Fernando Gaucho'); // Default chat
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const chats = [
        'Tim Hover',
        'Marian Zuch',
        'Maria Valbuena',
        'Fernando Gaucho',
        'Luis Monroe',
    ];

    useEffect(() => {
        const q = query(
            collection(firestore, 'chats', selectedChat, 'messages'),
            orderBy('timestamp')
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, [selectedChat]);

    const handleChatClick = (name) => {
        setSelectedChat(name);
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() === '') return;

        await addDoc(collection(firestore, 'chats', selectedChat, 'messages'), {
            text: newMessage,
            timestamp: serverTimestamp(),
            sender: 'You', // Replace with actual sender information
        });

        setNewMessage('');
    };

    return (
        <div className="flex flex-col md:flex-row h-[90vh] p-2 md:p-4">
            <div className="flex flex-col md:flex-row w-full md:w-2/3 bg-white rounded-lg shadow-md">
                <div className="w-full md:w-1/3 border-r border-gray-300">
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
                    <div className="p-2 md:p-4">
                        {chats.map((name) => (
                            <div
                                className={`flex items-center p-2 md:p-4 cursor-pointer ${selectedChat === name ? 'bg-gray-200' : ''}`}
                                key={name}
                                onClick={() => handleChatClick(name)}
                            >
                                <img
                                    src={`https://via.placeholder.com/40?text=${name.charAt(0)}`}
                                    alt={name}
                                    className="rounded-full w-8 h-8 md:w-10 md:h-10 object-cover"
                                />
                                <div className="ml-2 md:ml-4">
                                    <h4 className="font-semibold text-sm md:text-base">{name}</h4>
                                    <p className="text-gray-600 text-xs md:text-sm">Last message...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-2 md:p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">{selectedChat}</h2>
                        <div className="flex items-center">
                            <span className="text-xs md:text-sm">Members:</span>
                            <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">+</button>
                            <img
                                src="https://via.placeholder.com/24"
                                alt="Member"
                                className="ml-2 rounded-full w-6 h-6 md:w-8 md:h-8 object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {messages.map((message) => (
                            <div key={message.id} className={`mt-2 ${message.sender === 'You' ? 'bg-gray-200' : ''} p-2 rounded-lg`}>
                                <p className="text-sm">{message.text}</p>
                                <span className="text-xs text-gray-600">{message.timestamp?.toDate().toLocaleTimeString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message here"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Information */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md mt-4 md:mt-0 md:ml-4 p-4 md:p-6">
                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Profile"
                        className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover"
                    />
                    <h2 className="mt-2 md:mt-4 text-lg md:text-xl font-semibold">{selectedChat}</h2>
                    <p className="text-gray-600 text-sm md:text-base">CEO & Founder at Highly Inc</p>
                </div>
                <div className="mt-4 md:mt-6">
                    <h3 className="text-md md:text-lg font-semibold">Information</h3>
                    <div className="mt-2 md:mt-4">
                        <p className="text-gray-700 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    </div>
                </div>
                <div className="mt-4 md:mt-6">
                    <h3 className="text-md md:text-lg font-semibold">Images (14)</h3>
                    <div className="mt-2 md:mt-4">
                        {Array(2).fill('').map((_, index) => (
                            <div className="flex space-x-2 mt-2" key={index}>
                                {Array(3).fill('').map((_, idx) => (
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt={`Image ${index * 3 + idx + 1}`}
                                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg"
                                        key={idx}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
