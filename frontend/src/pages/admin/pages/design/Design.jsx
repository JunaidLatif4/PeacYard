import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Table from '../../../../components/table/Table';
import "./design.scss";

const Design = () => {

  const [designs, setDesigns] = useState([
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
    {
      title: 'Action', key: 'action',
      render: (_, record) => (
        <div>
          <button className="theme-btn btn-pad">
            Clone
          </button>
        </div>
      ),
    }
  ]
  return (
    <section id="design">
      <Link className='theme-btn btn-pad add-design' to="/admin/designs/add"> Add &nbsp; +  </Link>
      <br />
      <Table
        rows={designs}
        columns={columns}
        hasRowSelection
        hasSearch
        hasDropDownAction
        descreaseRightActionWidth
        dropDownActionList={["Actions"]}
        tableLeftActions={["Open", "Closed", "Expired", "Archive", "Templates", "All"]}
        tableLeftActiveAction="Open"
      />
    </section>
  )
}

export default Design
