import React, { useState } from "react";
import "./Reports.scss";
import Table from "../../../../components/table/Table";

const Reports = () => {

    const [reports, setReports] = useState([
        {
            id: 1,
            name: "Abby Adams",
            location: `Sales Office 1`,
            savedDesigns: "23",
            offersPending: "6",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            closedValue: "1 233 988 kr",
        },
        {
            id: 2,
            name: "Abby Adams",
            location: `Sales Office 1`,
            savedDesigns: "23",
            offersPending: "6",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            closedValue: "1 233 988 kr",
        },
        {
            id: 3,
            name: "Abby Adams",
            location: `Sales Office 1`,
            savedDesigns: "23",
            offersPending: "6",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            closedValue: "1 233 988 kr",
        },
        {
            id: 4,
            name: "Abby Adams",
            location: `Sales Office 1`,
            savedDesigns: "23",
            offersPending: "6",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            closedValue: "1 233 988 kr",
        },
        {
            id: 5,
            name: "Abby Adams",
            location: `Sales Office 1`,
            savedDesigns: "23",
            offersPending: "6",
            ordersPending: "11",
            ordersClosed: "41",
            potentialValue: "641 989 kr",
            closedValue: "1 233 988 kr",
        },
    ])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Location/Group',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Saved Designs',
            dataIndex: 'savedDesigns',
            key: 'savedDesigns',
        },
        {
            title: 'Offers Pending',
            dataIndex: 'offersPending',
            key: 'offersPending',
        },
        {
            title: 'Orders Pending',
            dataIndex: 'ordersPending',
            key: 'ordersPending',
        },
        {
            title: 'Orders Closed',
            dataIndex: 'ordersClosed',
            key: 'ordersClosed',
        },
        {
            title: 'Potential Value',
            dataIndex: 'potentialValue',
            key: 'potentialValue',
        },
        {
            title: 'Closed Value',
            dataIndex: 'closedValue',
            key: 'closedValue',
        },
    ]

    return (
        <>
            <Table
                rows={reports}
                columns={columns}
                hasEditDeleteAction
                hasEndDate
                hasStartDate
                hasSearch
                hasDropDownAction
                dropDownActionList={["Last 30 Days", "Last Month"]}
                tableLeftActions={["Users", "Groups", "Site id's", "Companies"]}
                tableLeftActiveAction="Users"
            />
        </>
    )
}

export default Reports;