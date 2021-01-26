import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />  
            <h2 className="sidebarChatName"> Gustavo Noronha</h2>
            <h2 className="sidebarChatMessage"> Olá, tudo bem?</h2>
        </div>
    );
}

export default SidebarChat;