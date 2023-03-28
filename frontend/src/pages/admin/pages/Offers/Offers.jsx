import React, { useState } from "react";
import "./Offers.scss";
import Table from "../../../../components/table/Table";
import OfferRequest from "./Components/OfferRequest/OfferRequest"
import NewOffer from "./Components/NewOffer/NewOffer";
import { Button } from "antd";

const Offers = () => {

    const [offerRequestModal, setOfferRequestModal] = useState(false);
    const [newOfferModal, setNewOfferModal] = useState(false);

    const toggleOfferRequestModal = () => setOfferRequestModal(!offerRequestModal);
    const toggleNewOfferModal = () => setNewOfferModal(!newOfferModal);

    const [offers, setOffers] = useState([
        {
            id: 1,
            name: "Abby Adams",
            design: `1234`,
            action: "Respond",
            offer: "No Offer Created Yet",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            email: "abc@gmail.com",
            dname: "Hey Family"
        },
        {
            id: 2,
            name: "Abby Adams",
            design: `1234`,
            action: "Respond",
            offer: "No Offer Created Yet",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            email: "abc@gmail.com",
            dname: "Hey Family"
        },
        {
            id: 3,
            name: "Abby Adams",
            design: `1234`,
            action: "Respond",
            offer: "No Offer Created Yet",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            email: "abc@gmail.com",
            dname: "Hey Family"
        },
        {
            id: 4,
            name: "Abby Adams",
            design: `1234`,
            action: "Respond",
            offer: "No Offer Created Yet",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            email: "abc@gmail.com",
            dname: "Hey Family"
        },
        {
            id: 5,
            name: "Abby Adams",
            design: `1234`,
            action: "Respond",
            offer: "No Offer Created Yet",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            email: "abc@gmail.com",
            dname: "Hey Family"
        },
    ])

    const columns = [
        {
            title: 'Design ID',
            dataIndex: 'design',
            key: 'design',
            render: (_, data) => <> <span onClick={toggleOfferRequestModal}> {data?.design} </span> </>
        },
        {
            title: 'Offer ID',
            dataIndex: 'offer',
            key: 'offer',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
        {
            title: 'Design Name',
            dataIndex: 'dname',
            key: 'dname',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Value',
            dataIndex: 'potentialValue',
            key: 'potentialValue',
        },
    ]

    return (
        <>
            <Button className="theme-btn" style={{ margin: ".8rem" }} onClick={toggleNewOfferModal}> ADD + </Button>
            <Table
                rows={offers}
                columns={columns}
                hasSearch
                hasDropDownAction
                dropDownActionList={["Last 30 Days", "Last Month"]}
                tableLeftActions={["New Received", "Sent", "Closed", "Canceled"]}
                tableLeftActiveAction="New Received"
            />
            <OfferRequest openModel={offerRequestModal} setOpenModel={setOfferRequestModal} toggleModel={toggleOfferRequestModal} />
            <NewOffer openModel={newOfferModal} setOpenModel={setNewOfferModal} toggleModel={toggleNewOfferModal} />
        </>
    )
}

export default Offers;