import React from 'react';
import Peopledata from './Peopledata';
import ChatListCard from './ChatListCard';
function ChatPeople(){
return(
    
    <>
        {
            Peopledata.map((data,index)=>{
                return  < ChatListCard  user_name={data.user_name} key={data.id} />
            })
        } 
       
        
    </>
)
}
export default ChatPeople;