import React from 'react';
import Avatar from 'react-avatar';

const ChatInfo = ({ chatPartner }) => (
    <div className="w-full hidden md:block md:w-1/3 bg-white rounded-lg  mt-4 md:mt-0 md:ml-4 p-4 md:p-6">
        <div className="flex flex-col items-center">
            <Avatar
                name={chatPartner ? chatPartner.displayName.charAt(0) : 'N/A'}
                size="80"
                round
                className="object-cover"
            />
            <h2 className="mt-2 md:mt-4 text-lg md:text-xl font-semibold">
                {chatPartner ? `${chatPartner.displayName}` : 'Select a chat'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
                {chatPartner ? `${chatPartner.role} at ${chatPartner.company}` : 'Select a chat to start'}
            </p>
        </div>
        <div className="mt-4 md:mt-6">
            <h3 className="text-md md:text-lg font-semibold">Information</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
        </div>
        <div className="mt-4 md:mt-6">
            <h3 className="text-md md:text-lg font-semibold">Images (14)</h3>
            <div className="flex mt-2 md:mt-4">
            </div>
        </div>
    </div>
);

export default ChatInfo;
