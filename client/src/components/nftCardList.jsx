import NftCard from "./nftCard"

const nftCards = [
    {
        "serialId": "1234567",
        "warrantyDays": 30,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 3,
        "issueTime": "something",
        "previousOwners": [
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            },
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            },
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            },
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            },
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            }
        ],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            },
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            },
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            },
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    },
    {
        "serialId": "12345347",
        "warrantyDays": 30,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 3,
        "issueTime": "something",
        "previousOwners": [],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    },
    {
        "serialId": "23984719",
        "warrantyDays": 30,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 2,
        "issueTime": "something",
        "previousOwners": [
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            }
        ],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    },
    {
        "serialId": "09328523",
        "warrantyDays": 3000,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 10,
        "issueTime": "something",
        "previousOwners": [
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            }
        ],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    },
    {
        "serialId": "29384732",
        "warrantyDays": 0,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 1,
        "issueTime": "something",
        "previousOwners": [
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            }
        ],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    },
    {
        "serialId": "234234",
        "warrantyDays": 300,
        "warrantyConditionsUrl": "https://example.com",
        "transfersRemaining": 0,
        "issueTime": "something",
        "previousOwners": [
            {
                "ownerAddress": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "purchaseTime": "something",
                "sellTime": "something",
            }
        ],
        "claims": [
            {
                "claimedBy": "0xb794f5ea0ba39494ce839613fffba74279579268",
                "claimTime": "something",
                "claimReason": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti. Quod ullam ipsam, iste necessitatibus, excepturi vero doloremque natus odit enim at ratione cumque debitis expedita perferendis possimus obcaecati pariatur."
            }
        ] 
    }
]


export default function NftCardList() {
    return (
        <div className="flex justify-center flex-wrap">
            {
                nftCards.map((card, i) => {
                    return (
                        <NftCard key={i} cardData={card}/>
                    )
                })
            }
        </div>

    )
}