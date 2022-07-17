import React from "react";
import "./Chats.css";
import chatData from "./chatData";
function Chats() {
	const data = chatData.data.chats;

	return (
		<div className="chats">
			{data.map((chat, index) => {
				return (
					<div onClick={()=>alert('You clicked chat-Box')} className="chat__container" key={index}>
						<img src={chat.image} alt="user_image" />
                        <div className="chat__containerName">
                            <span>{chat.name}</span>
                            <p>{chat.messsage}</p>
                        </div>
                        <div className="chat__containerCount">
                            <span>{chat.messsageTime}</span>
                            {chat.messageCount>1? <div className="messageCount"><p>{chat.messageCount}</p></div> : <div className="singleMessage"></div>}
                        </div>
					</div>
				);
			})}
		</div>
	);
}

export default Chats;
