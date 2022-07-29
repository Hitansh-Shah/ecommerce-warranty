import {Modal} from "flowbite-react"
import { useState } from "react"
import PreviousOwners from "./previousOwners"
import Claims from "./claims"
import TransferModal from "./transferModal"
import ClaimModal from "./claimModal"

export default function NftCard({ cardData }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTransferExpanded, setIsTransferExpanded] = useState(false)
    const [isClaimExpanded, setIsClaimExpanded] = useState(false)
    const handleOnClick = (e) => {
        setIsExpanded(true)
    }
    const handleOnTranfer = (e) => {
        setIsTransferExpanded(true)
    }
    const handleOnClaim = (e) => {
        setIsClaimExpanded(true)
    }
    return (
        <div>
            <button onClick={handleOnClick} id="card-button" >
                <div className="w-80 p-6 border border-black bg-gray-300 m-8 cursor-pointer hover:scale-110 transition-all">
                    <div className="p-1">
                        <span className="font-bold mr-2">Serial Id :</span>{cardData.serialId}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Warranty Period :</span>{cardData.warrantyDays} Days
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Transfers Remaining :</span>{cardData.transfersRemaining}
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
                        <span className="font-bold mr-2">Serial Id :</span>{cardData.serialId}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Warranty Period :</span>{cardData.warrantyDays} Days
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Transfers Remaining :</span>{cardData.transfersRemaining}
                    </div>
                    <div className="p-1">
                        <span className="font-bold mr-2">Issue Time :</span> something
                    </div>
                    <div>
                        <PreviousOwners prevOwners={cardData.previousOwners}/>
                    </div>
                    <div>
                        <Claims claims={cardData.claims}/>
                    </div>
                    <div className="flex justify-center p-4">
                        <button className=" border border-black hover:bg-teal-500 p-1 px-3 rounded-xl m-4" onClick={handleOnTranfer}>
                            Transfer
                        </button>
                        <TransferModal isTransferExpanded={isTransferExpanded} setIsTransferExpanded={setIsTransferExpanded}/>
                        <button className=" border border-black hover:bg-teal-500 p-1 px-3 rounded-xl m-4" onClick={handleOnClaim}>
                            Claim
                        </button>
                        <ClaimModal isClaimExpanded={isClaimExpanded} setIsClaimExpanded={setIsClaimExpanded} />
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