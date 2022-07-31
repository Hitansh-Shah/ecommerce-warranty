import NftCardList from "./nftCardList"
import { getItemsofUser, getUserPoints } from '../backend/interact.js'
import { useContext } from "react"
import { WalletAddressContext } from "../App"
import { useEffect } from "react"
import { useState } from "react"

export default function User({ walletAddress }) {
    const [userItems, setUserItems] = useState(null)
    const [userPoints, setUserPoints] = useState(null)
    const loadUserItems = async () => {
        const data = await getItemsofUser(walletAddress)
        // console.log(data)
        setUserItems(data)
    }

    const loadUserPoints = async () => {
        const data = await getUserPoints(walletAddress)
        // console.log(parseInt(data['_hex'], 16))
        setUserPoints(parseInt(data['_hex'], 16))

    }
    useEffect(() => {
        loadUserItems()
        loadUserPoints()
    }, [])
    return  (
        <div>
            <div className='flex justify-center m-6 text-2xl'>
                USER
            </div>
            <div>
                <span className="font-bold mr-2">Loyalty Points: </span> {
                    !(userPoints == null) ?
                    userPoints:
                    'Loading...'
                }
            </div>
            {
                !userItems ?
                <div className="m-8">Loading...</div>
                :
                <NftCardList userItems={[userItems]} walletAddress={walletAddress}/>
            }
        </div>
    )
}