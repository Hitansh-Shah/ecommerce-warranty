import { useState } from "react"

export default function Switcher({ isUser, setIsUser }) {
    const onClickUser = (e) => {
        setIsUser(true)
    }
    const onClickAdmin = () => {
        setIsUser(false)
    }
    return (
        <div className="flex justify-center p-6">
            <button 
            className={`border w-80 p-3 m-3 ${isUser? "bg-teal-500" : "bg-white border-black"} `}
            onClick={onClickUser}
            >
                USER
            </button>
            <button 
            className={`border w-80 p-3 m-3 ${!isUser? "bg-teal-500" : "bg-white border-black"} `}
            onClick={onClickAdmin}
            >
                ADMIN
            </button>
        </div>
    )
}