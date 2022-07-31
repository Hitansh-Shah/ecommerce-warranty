import emailjs from '@emailjs/browser'
import { tranferItem } from "../backend/interact.js"
import { Modal } from "flowbite-react"
import { useRef } from "react"

export default function TransferModal({ itemId, isTransferExpanded, setIsTransferExpanded, itemData, walletAddress }) {
    const transferItemForm = useRef()
    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TRANSFER_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env
    const sendTransferEmail = async () => {
        try {
            const result = await emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TRANSFER_TEMPLATE_ID, transferItemForm.current, REACT_APP_EMAILJS_PUBLIC_KEY)
            console.log(result.text, result.status)
        } catch (err) {
            console.log('Error: ', err)
        }
    }

    const handleTransfer = async () => {
        const to = document.getElementById("to").value
        await tranferItem(to, itemId)
        sendTransferEmail()
        setIsTransferExpanded(false)
    }

    const hexToDex = (hex) => parseInt(hex, 16)

    return (
        <div>
            <Modal
                show={isTransferExpanded}
                onClose={() => setIsTransferExpanded(false)}
                position="top-center"
                size="xl"
            >
                <Modal.Body>
                    <form ref={transferItemForm}>
                        <div className="m-3 flex justify-center items-center flex-wrap">
                            <div className="m-2">Transfer To: </div>
                            <input type="text" required={true} id="to" name="to" placeholder="0xb794f5ea0ba39494ce839613fffba74279579268" className="border border-black m-2" />
                        </div>
                        <div className="m-3 flex justify-center items-center flex-wrap">
                            <div className="m-2">Recipient Email: </div>
                            <input type="text" required={false} id="tEmail" name="toEmail" placeholder="johndoe@gmail.com" className="border border-black m-2" />
                        </div>
                        <input type="hidden" name='serialId' value={hexToDex(itemData['serialId']['_hex'])}/>
                        <input type="hidden" name='walletAddress' value={walletAddress}/>
                        <input type="hidden" name='warrantyConditionsURL' value={itemData['warrantyConditionsURL']}/>
                        <input type="hidden" name='warrantyDays' value={hexToDex(itemData['warrantyDays']['_hex'])}/>
                        <input type="hidden" name='transfersRemaining' value={hexToDex(itemData['transfersRemaining']['_hex'])}/>
                    </form>
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