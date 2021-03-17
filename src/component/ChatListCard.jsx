import React from 'react';
import '../container/ChatArea';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';
function ChatListCard(props){
   var myVar="/";
   myVar=(props.user_name==="user1")?"/":myVar+props.user_name;
    return (
        <>

            <Link to={myVar} className="personName" >
                <div className ="chat_list_card" >
                <PersonIcon style={{height:'75px',width:'75px'}}/>
                <h2 >{props.user_name}</h2>


                </div>

            <div className="line"></div>
            </Link>
            


            
            
            
            

        </>
    )
}
export default ChatListCard;