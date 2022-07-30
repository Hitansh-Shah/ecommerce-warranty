import logo from './logo.svg';
import './App.css';
import Admin from './components/admin';
import User from './components/user';
import Switcher from './components/switcher';
import { addWalletListener, connectWallet, getCurrentWalletConnected } from './backend/connectWallet.js'
import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

// export const WalletAddressContext = createContext('')

function App() {
  const [isUser, setIsUser] = useState(true)
  const [walletAddress, setWalletAddress] = useState("")

  const loadWallet = async () => {
    await getCurrentWalletConnected(setWalletAddress)
    await addWalletListener(setWalletAddress)
  }

  useEffect(() => {
    loadWallet()
  }, [])
  
  return (
    <div className="App">
      {
        !walletAddress.length ? 
          <div className='w-full h-96 flex justify-center items-center'>
            <div className='w-full h-fit'>
              <div>
                Please connect to your Metamask wallet in order to proceed...
              </div>
              <button 
              onClick={() => {
                connectWallet(setWalletAddress)
              }} 
              className="bg-gray-400 p-1 px-3 rounded-lg mr-2 h-10"
              >
                {
                  walletAddress.length>0 ?
                  `Connected: ${walletAddress.substring(0,5)}...${walletAddress.substring(walletAddress.length - 4).toUpperCase()}` :
                  "Connect"
                }
              </button>
            </div>
          </div>
        :
          <div className='mt-10'>
            <div className='w-full flex justify-center'>
              <button
              className="bg-green-400 p-1 px-3 rounded-lg mr-2"
              >
                {
                  `Connected: ${walletAddress.substring(0,5)}...${walletAddress.substring(walletAddress.length - 4).toUpperCase()}`
                }
              </button>
            </div>
            <div>
                {
                  walletAddress.toLowerCase() == "0x3935EdD843311F9D01F7114b3f344C1fa842F83E".toLowerCase() ?
                    <Admin/>
                  :
                    <User walletAddress={walletAddress}/>
      
                }
            </div>
          </div>
      }
    </div>
  );
}

export default App;
