// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../../backend/firebaseConfig';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import ChatSidebar from '../sections/Chat/ChatSidebar';
import ChatHeader from '../sections/Chat/ChatHeader';
import ChatInfo from '../sections/Chat/ChatInfo';
import MessageList from '../sections/Chat/MessageList';


const Chat = ({ user }) => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(firestore, 'users');
                const usersSnapshot = await getDocs(usersCollection);
                if (usersSnapshot.empty) {
                    console.log('No users found');
                }
                const usersList = usersSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(usersList);
                console.log('Users fetched:', usersList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        if (!selectedChat) return;

        const q = query(
            collection(firestore, 'chats', selectedChat, 'messages'),
            orderBy('timestamp')
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            console.log('Fetching messages:', snapshot.docs);
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, [selectedChat]);

    const handleChatClick = (selectedUser) => {
        const chatId = [user.email, selectedUser.email].sort().join('_');
        setSelectedChat(chatId);
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() === '' || !selectedChat) return;

        await addDoc(collection(firestore, 'chats', selectedChat, 'messages'), {
            text: newMessage,
            timestamp: serverTimestamp(),
            sender: user.email,
        });

        setNewMessage('');
    };

    const chatPartnerEmail = selectedChat ? selectedChat.split('_').find(email => email !== user.email) : '';
    const chatPartner = users.find(user => user.email === chatPartnerEmail);

    return (
        <div className="flex flex-col md:flex-row h-[90vh]">
                        <ChatSidebar users={users} selectedChat={selectedChat} onChatClick={handleChatClick} />
            <div className="flex flex-1 flex-col md:flex-row p-4 bg-gray-100">
                <div className="flex-1 flex flex-col">
                    <ChatHeader chatPartner={chatPartner} />
                    <MessageList messages={messages} user={user} />
                    <div className="mt-auto flex items-center">
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
                <ChatInfo chatPartner={chatPartner} />
            </div>
        </div>
    );
};

export default Chat;

