import { Avatar } from '@material-ui/core';
import { AttachFile, Camera, InsertEmoticon, Mic, MoreVert, PictureAsPdf, PictureInPicture, PictureInPictureAltRounded, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Chat.css';

function Chat() {
  return (
    // onde ficam os chats
    <div className="chat">
      <div className="chatHeader">
          <div className="chatHeaderLeft">
            <Avatar />
            <h2 className="chatHeaderLeftName">Gustavo Noronha</h2>
            <p className="chatHeaderLeftStatus">Online</p>
          </div>
          <div className="chatHeaderRight">
              <SearchOutlined />
              <AttachFile />
              <MoreVert />
          </div>
         

      </div>
      <div className="chatMessages">
          <div className="chatMessagesWhite">
            <p>Olá, tudo bem? <p className="chatMessagesWhiteHour">9:55 am</p></p>
          </div>
      </div>
      <div className="chatFooter">
        <div className="chatFooterLeft">
                <InsertEmoticon />
                <input placeholder="Escreva uma mensagem..." type="text" />
            </div>
            <div className="chatFooterRight">
               <button> Enviar Mensagem</button>
               <Mic/>
              
            </div>
        </div>
    </div>
  );
}

export default Chat;
