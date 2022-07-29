import { Table } from "flowbite-react";

export default function PreviousOwners( {prevOwners} ) {
    return (
        <div>
            <div className="p-1 mb-2">
                <span className="font-bold mr-2">Previous Owners :</span>
            </div>
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
                                            {prevOwner.ownerAddress}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {prevOwner.purchaseTime}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {prevOwner.sellTime}
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
    )
}