import React from 'react';
import Heading from '../component/Heading';
import ChatPeople from '../component/ChatPeople'
function ChatList(){

    return(
        <>
            <div className="container">
                <Heading />
            
                <ChatPeople />
            
            </div>
        </>
    )
}
export default ChatList;