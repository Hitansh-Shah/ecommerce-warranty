import { Modal } from "flowbite-react"

export default function ClaimModal({ isClaimExpanded, setIsClaimExpanded }) {
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
                        <button className="bg-green-400 p-1 px-3 rounded-lg mr-2">Claim</button>
                        <button className="bg-red-500 p-1 px-3 rounded-lg ml-2" onClick={() => setIsClaimExpanded(false)}>Cancel</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}