import NftCardList from "./nftCardList"
import { getItemsofUser, itemCount } from '../backend/interact.js'
import { useContext } from "react"
import { WalletAddressContext } from "../App"

export default function User({ nftCards }) {
    const userAddress = useContext(WalletAddressContext)
    return  (
        <div>
            <NftCardList/>
            <button onClick={() => getItemsofUser(userAddress)}>Click me</button>
        </div>
    )
}