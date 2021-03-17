import React from 'react';
import ChatAreaHeading from '../component/ChatAreaHeading';
import './ChatArea';
import Chats from '../component/Chats';
function ChatArea(props){
  
    return(
    <>
    <div className="right_div">
      <ChatAreaHeading user={props.user}/>
     
      <Chats user={props.user}/>
    </div>


</>
    )
}

export default ChatArea;