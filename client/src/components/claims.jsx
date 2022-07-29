import { Timeline } from "flowbite-react"

export default function Claims({ claims }) {
    return (
        <div>
            <Timeline>
                {
                    claims.map((claim, i) => {
                        return (
                            <Timeline.Item key={i}>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>
                                    {claim.claimTime}
                                </Timeline.Time>
                                {/* <Timeline.Title>
                                    {claim.claimedBy}
                                </Timeline.Title> */}
                                <Timeline.Body>
                                    <span className="font-bold">Claimed By: </span>{claim.claimedBy}
                                    <br/>
                                    <span className="font-bold">Claim Reason: </span> 
                                    {claim.claimReason}
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        )
                    })
                }
            </Timeline>
        </div>
    )
}