import "./Message.css"

function Message(props) {
    return ( 
        <span className="message">{props.text}</span>
    );
}

export default Message;