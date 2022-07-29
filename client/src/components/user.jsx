import NftCardList from "./nftCardList"
import { getItemsofUser, getPreviousOwners } from '../backend/interact.js'
import { useContext } from "react"
import { WalletAddressContext } from "../App"
import { useEffect } from "react"
import { useState } from "react"

export default function User({ walletAddress }) {
    const [userItems, setUserItems] = useState(null)
    const loadUserItems = async () => {
        const data = await getItemsofUser(walletAddress)
        // console.log(data)
        setUserItems(data)
    }
    useEffect(() => {
        loadUserItems()
    }, [])
    return  (
        <div>
            {
                !userItems ?
                <div>Loading</div>
                :
                <NftCardList userItems={[userItems]}/>
            }
        </div>
    )
}