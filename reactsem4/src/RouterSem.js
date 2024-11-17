import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import { NoChat } from './NoChat';

var initialChats = {
  "1": {
    "name": "chat1",
    "messages": [{
      "sender": "bot",
      "content": "test message"
    }]
  },
  "2": {
    "name": "chat2",
    "messages": [{
      "sender": "bot",
      "content": "helloo"
    }]
  }
} // я предпологая, что потом это будет работать как в дискорде - что ИД чатов будут из БД, а не локально, поэтому на массивом.

export default function Router() {
  return (
  <BrowserRouter>
  <ul>
  <li>
  <Link to="/profile">profile</Link>
  </li>
  <li>
  <Link to="/chats">chats</Link>
  </li>
  <li>
  <Link to="/">Home</Link>
  </li>
  </ul>
  <Routes>
    <Route path="/profile" element={<Profile/>}>
    </Route>
    <Route
    exact
    path="/chats/:chatId?"
    element={<Chats initialChats={initialChats}/>}
    >
    </Route>
    <Route exact path="/" element={<Home/>}>
    </Route>
    <Route path="/nochat" element={<NoChat chats={initialChats}/>}>
    </Route>
    <Route path="*" element={<h3>Page not found</h3>}>
    </Route>
  </Routes>
  </BrowserRouter>
  );
  }
