import logo from './logo.svg';
import './App.css';
import Admin from './components/admin';
import User from './components/user';
import Switcher from './components/switcher';
import { useState } from 'react';

function App() {
  const [isUser, setIsUser] = useState(true)
  return (
    <div className="App">
      <Switcher isUser={isUser} setIsUser={setIsUser}/>
      {
        isUser ?
        <User/>
        :
        <Admin/>
      }
    </div>
  );
}

export default App;
