import React,{useEffect, useState} from 'react';
import '../container/Chat_area.css'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import DoneIcon from '@material-ui/icons/Done';
import Peopledata from './Peopledata';

        function Chats(props){
            var user = Peopledata.filter((data)=>{
                
                if(data.user_name.includes(props.user)) {
                    return data;
                }
            });
            const [val,setvalue] = useState("");
            const [todo,setTodo] = useState(user[0].messages);
            
           useEffect(()=>{
                setTodo(user[0].messages);
           },[props.user] )
            const on_change = (event) =>{
                                        
                setvalue(event.target.value);
                
            };
            const on_key_up = (event) => {

                if(event.keyCode === 13&&val!==""){
                
                    
                    todo.push(val);
                    setvalue("");
                    
                }
                

                
                
            };
            
            return (
                <>
                    
                    <div>
                        <div className="chats" style={{backgroundImage: `url("1.jpg")`}}>
                            <div style={{border: "1px solid transparent",display: "flex",flexDirection: "column",marginTop: "40px"}}>
                            
                                {
                                    todo.map((data,index)=>{
                                      
                                    return <p key={index} className="message_box">{data}<DoneIcon className="doneicon" /></p>
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="div_with_input_mic">
                            <div className="input_div" >
                                <SentimentVerySatisfiedIcon className = "sentiment_emoji" />
                                <input 
                                    placeholder="type a message"
                                    className="input_message" 
                                    onChange = { on_change } 
                                    onKeyUp = {on_key_up }
                                    value = { val }
                                />
                                <AttachFileIcon className = "attachfile_emoji"  />
                                <CameraAltIcon className = "camera_emoji"/>
                            </div>
                            <div className="mic"><MicIcon className="mic_emoji"/></div>  
                        </div>
                    </div>
                </>
                
            )
           

        }


export default Chats;