import React, { useState } from "react";
import "./Orders.scss";
import Table from "../../../../components/table/Table";
import { Button } from "antd";
import CreateOrderModal from "./Components/CreateOrderModal/CreateOrderModal";
import ShowSingleOrderModal from "./Components/ShowSingleOrder/ShowSingleOrder";

const Orders = () => {

    const [createOrderModal, setCreateOrderModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);

    const toggleCreateOrderModal = () => setCreateOrderModal(!createOrderModal);
    const toggleShowOrderModal = () => setShowOrderModal(!showOrderModal);

    const [allOrders, setAllOrders] = useState([
        {
            id: 1,
            name: "Abby Adams",
            design: `1234`,
            action: "k",
            offer: "VS-ORDER-2022-1234",
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
            action: "k",
            offer: "VS-ORDER-2022-1234",
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
            action: "k",
            offer: "VS-ORDER-2022-1234",
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
            action: "k",
            offer: "VS-ORDER-2022-1234",
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
            action: "k",
            offer: "VS-ORDER-2022-1234",
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
            render: (_, data) => <> <span onClick={toggleShowOrderModal}> {data?.design} </span> </>
        },
        {
            title: 'Order ID',
            dataIndex: 'offer',
            key: 'offer',
        },
        {
            title: 'Status',
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
            <Button className="theme-btn" style={{ margin: ".8rem" }} onClick={toggleCreateOrderModal}> ADD + </Button>
            <Table
                rows={allOrders}
                columns={columns}
                hasSearch
                hasDropDownAction
                dropDownActionList={["Last 30 Days", "Last Month"]}
                tableLeftActions={["Open", "Confirmed", "Canceled", "Complete", "All"]}
                tableLeftActiveAction="Open"
            />
            <CreateOrderModal openModel={createOrderModal} setOpenModel={setCreateOrderModal} toggleModel={toggleCreateOrderModal} />
            <ShowSingleOrderModal openModel={showOrderModal} setOpenModel={setShowOrderModal} toggleModel={toggleShowOrderModal} />
        </>
    )
}

export default Orders;