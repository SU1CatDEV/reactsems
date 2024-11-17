import { Link } from "react-router-dom";

export const ChatList = ({ chats, chatId }) => (
    <div>
    {Object.keys(chats).map((id, i) => (
    <div key={i}>
    <Link to={`/chats/${id}`}>
    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
    {chats[id].name}
    </b>
    </Link>
    </div>
    ))}
    </div>
    );
    