import logo from './logo.svg';
import './App.css';
import Admin from './components/admin';
import User from './components/user';
import Switcher from './components/switcher';
import { addWalletListener, connectWallet, getCurrentWalletConnected } from './backend/connectWallet.js'
import { useEffect, useState } from 'react';

function App() {
  const [isUser, setIsUser] = useState(true)
  const [walletAddress, setWalletAddress] = useState("")
  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress)
    addWalletListener(setWalletAddress)
  }, [])
  return (
    <div className="App">
      <Switcher isUser={isUser} setIsUser={setIsUser}/>
      <div className='w-full flex justify-center'>
        <button 
        onClick={() => {
          connectWallet(setWalletAddress)
        }} 
        className="bg-green-400 p-1 px-3 rounded-lg mr-2"
        >
          {
            walletAddress.length>0 ?
            `Connected: ${walletAddress.substring(0,5)}...${walletAddress.substring(walletAddress.length - 4).toUpperCase()}` :
            "Connect"
          }
          </button>
      </div>
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
