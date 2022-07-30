import { Timeline } from "flowbite-react"
import { getClaims } from "../backend/interact"
import { useState } from "react"
import { useEffect } from "react"

export default function Claims({ itemId }) {

    const [claims, setClaims] = useState(null)
    const loadClaims = async () => {
        const data = await getClaims(itemId)
        setClaims(data)
        console.log(data)
    }

    useEffect(() => {
        loadClaims()
    }, [])

    return (
        <div>
            {
                claims ?
                <Timeline>
                    {
                        claims.map((claim, i) => {
                            return (
                                <Timeline.Item key={i}>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                    <Timeline.Time>
                                        {new Date(parseInt(claim['claimTime']['_hex'], 16)*1000).toLocaleString()}
                                    </Timeline.Time>
                                    <Timeline.Body>
                                        <span className="font-bold">Claimed By: </span>{claim['ownerAddress']}
                                        <br/>
                                        <span className="font-bold">Claim Reason: </span> 
                                        {claim['claimReason']}
                                    </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
                :
                <div>
                    Loading...
                </div>

            }
        </div>
    )
}