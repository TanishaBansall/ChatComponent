import React from 'react';
import '../container/Chat_area.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
function Chat_area_heading(props) {
return(
   <>
      
        <div className="chat_area_heading">
            <ArrowBackIcon style={{color:'white',float:'left',height:'80px',width:'50px'}}/>
            <PersonIcon style={{height:'70px',width:'50px',float:'left'}} />
           <h1 className="chat_area_heading_text">
              {props.user}
            </h1>
            
            <div style={{display: "flex",justifyContent: "flex-end"}}> 
                <VideocamIcon style={{color:'white',height:'80px',width:'50px',marginTop: "-80px"}}/>
                <CallIcon style={{color:'white',height:'80px',width:'50px',marginTop: "-80px"}}/>
                <MoreVertIcon style={{color:'white',height:'70px',width:'50px',marginTop: "-80px"}}/>
            </div>
        </div>

    </>
)

}
export default Chat_area_heading;