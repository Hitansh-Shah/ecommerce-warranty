import {Modal} from "flowbite-react"
import { useState } from "react"
import PreviousOwners from "./previousOwners"
import { getLatestIssueTime } from "../backend/interact"
import Claims from "./claims"
import TransferModal from "./transferModal"
import ClaimModal from "./claimModal"
import { useEffect } from "react"

export default function NftCard({ itemData, walletAddress }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTransferExpanded, setIsTransferExpanded] = useState(false)
    const [isClaimExpanded, setIsClaimExpanded] = useState(false)
    const [issueTime, setIssueTime] = useState(null)

    const handleOnClick = (e) => {
        setIsExpanded(true)
    }

    const handleOnTranfer = (e) => {
        setIsTransferExpanded(true)
    }

    const handleOnClaim = (e) => {
        setIsClaimExpanded(true)
    }

    const hexToDex = (hex) => parseInt(hex, 16)

    const itemId = hexToDex(itemData['itemId']['_hex'])


    const loadIssueTime = async () => {
        const data = await getLatestIssueTime(itemId)
        setIssueTime(data['_hex'])
    }

    useEffect(() => {
        loadIssueTime()
        // console.log(itemId)
    }, [])
    return (
        <div>
            <button onClick={handleOnClick} id="card-button" >
                <div className="w-80 p-6 border border-black bg-gray-300 m-8 cursor-pointer hover:scale-110 transition-all">
                    <div className="p-1">
                        <span className="font-bold mr-2">Serial Id :</span>{hexToDex(itemData['serialId']['_hex'])}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Warranty Period :</span>{hexToDex(itemData['warrantyDays']['_hex'])} Days
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Transfers Remaining :</span>{hexToDex(itemData['transfersRemaining']['_hex'])}
                    </div>
                </div>

            </button>

            <Modal
                show={isExpanded}
                onClose={() => setIsExpanded(false)}
                position="top-center"
                size="4xl"
                style={{backdropFilter: "blur(10px)"}}
            >
                <Modal.Body>
                <div className="space-y-6">
                    <div className="p-1">
                        <span className="font-bold mr-2">Serial Id :</span>{hexToDex(itemData['serialId']['_hex'])}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Warranty Period :</span>{hexToDex(itemData['warrantyDays']['_hex'])} Days
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Warranty Conditions :</span><a className="text-blue-500" href={itemData['warrantyConditionsURL']}>{itemData['warrantyConditionsURL']}</a>
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Transfers Remaining :</span>{hexToDex(itemData['transfersRemaining']['_hex'])}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Issue Time :</span> {
                            issueTime ?
                                new Date(hexToDex(issueTime)*1000).toLocaleString()
                            :
                            'Loading...'
                            
                        }
                    </div>
                    <div>
                        <PreviousOwners itemId={itemId}/>
                    </div>
                    <div>
                        <Claims itemId={itemId}/>
                    </div>
                    <div className="flex justify-center p-4">
                        <button className={`border ${hexToDex(itemData['transfersRemaining']['_hex']) ? 'hover:bg-teal-500 border-black' : 'text-gray-400 border-gray-400 cursor-default'} p-1 px-3 rounded-xl m-4`} onClick={hexToDex(itemData['transfersRemaining']['_hex']) ? handleOnTranfer : null}>
                            Transfer
                        </button>
                        <TransferModal itemId={itemId} isTransferExpanded={isTransferExpanded} setIsTransferExpanded={setIsTransferExpanded} itemData={itemData} walletAddress={walletAddress}/>
                        <button className=" border border-black hover:bg-teal-500 p-1 px-3 rounded-xl m-4" onClick={handleOnClaim}>
                            Claim
                        </button>
                        <ClaimModal itemId={itemId} isClaimExpanded={isClaimExpanded} setIsClaimExpanded={setIsClaimExpanded} />
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-red-500 p-1 px-3 rounded-lg" onClick={() => setIsExpanded(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}