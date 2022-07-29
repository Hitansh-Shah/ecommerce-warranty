import { Table } from "flowbite-react";
import { getPreviousOwners } from "../backend/interact";
import { useState } from "react";
import { useEffect } from "react";

export default function PreviousOwners( {itemId} ) {
    const [prevOwners, setPrevOwners] = useState(null)
    const loadPrevOwners = async () => {
        const data = await getPreviousOwners(itemId)
        // console.log(data)
        setPrevOwners(data)
    }
    useEffect(() => {
        loadPrevOwners()
    }, [])
    return (
        <div>
            <div className="p-1 mb-2">
                <span className="font-bold mr-2">Previous Owners :</span>
            </div>
            {
                prevOwners ?

                    <div>
                        {
                            prevOwners.length ?
            
                            <Table>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Sr No.
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Owner Address
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Purchase Time
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Sell Time
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {
                                        prevOwners.map((prevOwner, i) => {
                                            return (
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {i+1}
                                                    </Table.Cell>
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {prevOwner['ownerAddress']}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {new Date(parseInt(prevOwner['puchaseTime']['_hex'], 16)*1000).toLocaleString()}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {new Date(parseInt(prevOwner['sellTime']['_hex'], 16)*1000).toLocaleString()}
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    }
                                </Table.Body>
                            </Table> 
            
                            :
            
                            <div>
                                This item does not have any previous owners yet.
                            </div>
                        }
                    </div>
                :
                    <div>
                        Loading...
                    </div>
            }
        </div>
    )
}