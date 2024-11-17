import { useState } from "react";

export const MessagesList = ({ messages, onSendMessage }) => {
    const [newMsg, setNewMsg] = useState("");

    function updateNewMsg(event) {
        setNewMsg(event.target.value);
    }

    function handleSendMessage() {
        if (newMsg.trim()) {
            onSendMessage({ sender: "you", content: newMsg });
            setNewMsg("");
        }
    }

    return (
        <div>
            {messages.map((val, key) => (
                <div key={key}>
                    {val.sender}: {val.content}
                </div>
            ))}
            <input 
                type="text" 
                value={newMsg} 
                id="newMsg" 
                onChange={updateNewMsg} 
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};
