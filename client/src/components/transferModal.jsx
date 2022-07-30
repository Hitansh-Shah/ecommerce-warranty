import { useEffect, useState } from "react"
import { tranferItem } from "../backend/interact.js"
import { Modal } from "flowbite-react"

export default function TransferModal({ itemId, isTransferExpanded, setIsTransferExpanded }) {

    const handleTransfer = async () => {
        const to = document.getElementById("to").value
        await tranferItem(to, itemId)
    }

    return (
        <div>
            <Modal
                show={isTransferExpanded}
                onClose={() => setIsTransferExpanded(false)}
                position="top-center"
                size="xl"
            >
                <Modal.Body>
                    <div className="m-3 flex justify-center items-center flex-wrap">
                        <div className="m-2">Transfer To: </div>
                        <input type="text" required={true} id="to" name="to" placeholder="0xb794f5ea0ba39494ce839613fffba74279579268" className="border border-black m-2" />
                    </div>
                    <div className="w-full flex justify-center items-center m-2">
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex">
                        <button className="bg-green-400 p-1 px-3 rounded-lg mr-2" onClick={handleTransfer}>Transfer</button>
                        <button className="bg-red-500 p-1 px-3 rounded-lg ml-2" onClick={() => setIsTransferExpanded(false)}>Cancel</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}