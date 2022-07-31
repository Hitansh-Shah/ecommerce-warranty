import { Modal } from "flowbite-react"
import { claimItem } from "../backend/interact"

export default function ClaimModal({ itemId, isClaimExpanded, setIsClaimExpanded }) {

    const handleClaim = async () => {
        const claimReason = document.getElementById("claimReason").value
        await claimItem(claimReason, itemId)
        setIsClaimExpanded(false)
    }

    return (
        <div>
            <Modal
                show={isClaimExpanded}
                onClose={() => setIsClaimExpanded(false)}
                position="top-center"
                size="xl"
            >
                <Modal.Body>
                    <div className="m-3 flex justify-center items-center flex-wrap">
                        <div className="m-2">Claim Reason: </div>
                        <textarea required={true} id="claimReason" name="claimReason" rows="2" cols="50"/>
                    </div>
                    <div className="w-full flex justify-center items-center m-2">
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex">
                        <button className="bg-green-400 p-1 px-3 rounded-lg mr-2" onClick={handleClaim}>Claim</button>
                        <button className="bg-red-500 p-1 px-3 rounded-lg ml-2" onClick={() => setIsClaimExpanded(false)}>Cancel</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}