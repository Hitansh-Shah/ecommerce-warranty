import { makeItem } from '../backend/interact.js'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react';

export default function Admin() {
    const makeItemForm = useRef()

    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env

    const sendEmail = async () => {
        try {
            const result = await emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, makeItemForm.current, REACT_APP_EMAILJS_PUBLIC_KEY)
            // console.log(result.text)
        } catch(err) {
            console.log(err.text)
        }
    }

    const handleMint = async (e) => {
        e.preventDefault()
        const recipient = document.getElementById("rAddress").value
        const recipientEmail = document.getElementById("rEmail").value
        const serialId = document.getElementById("sn").value
        const warrantyDays = document.getElementById("wd").value
        const warrantyConditionsURL = document.getElementById("wc").value
        const transfersRemaining = document.getElementById("transfers").value
        const usePoints = document.getElementById("points").value

        if(recipient && serialId && warrantyDays && warrantyConditionsURL && transfersRemaining) {
            await makeItem(serialId, recipient, warrantyDays, warrantyConditionsURL, transfersRemaining, usePoints)
            sendEmail()
        } else {
            alert("Please fill the required fields!")
        }

    }

    return (
        <div className="container mx-auto mt-5">
            <div className='flex justify-center m-6 text-2xl'>
                ADMIN
            </div>
            <form ref={makeItemForm}>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="rAddress" className="w-96">Recipient Address</label>
                    <input type="text" required={true} id="rAddress" name="rAddress" placeholder="0xb794f5ea0ba39494ce839613fffba74279579268" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="rEmail" className="w-96">Recipient Email</label>
                    <input type="text" required={false} id="rEmail" name="recipientEmail" placeholder="johndoe@gmail.com" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="sn" className="w-96">Serial Number</label>
                    <input type="text" required={true} id="sn" name="serialId" placeholder="1234567" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="wd" className="w-96">Warranty Duration (Days)</label>
                    <input type="number" required={true} min="0" id="wd" name="warrantyDays" placeholder="30" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="wc" className="w-96">Warranty Conditions</label>
                    <input type="url" required={true} id="wc" name="warrantyConditionsURL" placeholder="https://my-warranty-conditions-url.com" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap">
                    <label htmlFor="transfers" className="w-96">Number of Transfers allowed</label>
                    <input type="number" required={true} min="0" id="transfers" name="transfersRemaining" placeholder="3" className="border border-black p-2 ml-4 w-96"/>
                </div>
                <div className="m-5 flex justify-center flex-wrap items-center">
                    <label htmlFor="points" className="w-96">Use points</label>
                    <div className="flex justify-center lg:justify-start lg:ml-4 w-96">
                        <input type="checkbox" required={true} id="points" name="points" placeholder="3" />
                    </div>
                </div>
            </form>

            <div className="flex justify-center m-16">
                <button type="submit" onClick={handleMint} className="border border-black p-2 w-20 hover:bg-slate-500">
                    MINT
                </button>
            </div>
        </div>
    )
}