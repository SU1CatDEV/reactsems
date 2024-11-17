import { useParams } from "react-router-dom";
import { useState } from "react";
import { ChatList } from "./ChatList";
import { MessagesList } from "./MessagesList";
import { Navigate } from "react-router-dom";

export default function Chats(props) {
    const { initialChats } = props;
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);

    const updateMessages = (newMessage) => {
        setChats((prevChats) => ({
            ...prevChats,
            [chatId]: {
                ...prevChats[chatId],
                messages: [...prevChats[chatId].messages, newMessage],
            },
        }));
    };

    if (!chats[chatId]) {
        return <Navigate to="/nochat" />;
    }

    return (
        <div className="wrapper">
            <div>
                <ChatList chats={chats} chatId={chatId} />
            </div>
            <div>
                <MessagesList 
                    messages={chats[chatId].messages} 
                    onSendMessage={updateMessages} 
                />
            </div>
        </div>
    );
}
