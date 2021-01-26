import { Avatar } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat/SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">

                <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} /> {/* Icon */}
                <div className="headerRight">
                    <DonutLarge />
                    <Chat />
                    <MoreVert />
                </div>

            </div>
            <div className="search">
                <SearchOutlined />
                <input placeholder="Busce contatos ou conversas" type="text" />
            </div>
            <div className="chats">
               <h1 className="chatTitle">Recentes</h1>
                <SidebarChat />  
            </div>
        </div>
    );
}

export default Sidebar;