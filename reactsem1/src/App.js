import './App.css';
import Message from './Message';

function App() {
  const userName = "zoya"
  return (
    <div className="App">
      <div className="App-header">
        <h1>hello {userName}!!</h1>
        <h2>new messages:</h2>
        <div className="chat">
          <Message text="good morning!"/>
          <Message text="how are you?"/>
        </div>
        <Article name="info"/>
        <Article name="blog"/>
      </div>
    </div>
  );
}

function NewComp() {
  return (
    <div>new text!</div>
  )
}

function Heading() {
  return (
    <div>
      <h2>thing</h2>
      <p>paragraph</p>
      <a href="/">read more!</a>
    </div>
  );
}

function Article(props) {
  return ( 
    <div>
      <h2>article about {props.name}</h2>
      <a href="/">read more!</a>
    </div>
  );
}

export default App;
