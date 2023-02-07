// React
import React from "react";
import { Modal, Table as AntdTable } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { FaEdit, FaTrash } from "react-icons/fa";

// CSS
import "./Table.scss";


const Table = ({ columns = [], rows = [], hasEditDeleteAction = false, actionHandler = (row)=>console.log(row) }) => {

    const { confirm } = Modal;

    const HandleAction = (row) => {
        if (row && row.type === "delete") {
            confirm({
                title: 'Do you Want to delete?',
                icon: <ExclamationCircleFilled />,
                okType: "danger",
                onOk() {
                    actionHandler(row);
                },
                onCancel() {
                },
            });
            return;
        }

        actionHandler(row);
    }


    let tableColumns = [
        {
            title: '#',
            key: "sr",
            render: (_, record, index) => (
                <div>
                    {index + 1}
                </div>
            )
        },
        ...columns
    ];

    if (hasEditDeleteAction) {
        let index = tableColumns.length;
        tableColumns[index] =
        {
            title: 'Action', key: 'action',
            render: (_, record) => (
                <div>
                    <button className="btn" onClick={() => HandleAction({ record, type: "edit" })}>
                        <FaEdit style={{ color: "skyblue" }} size={20} />
                    </button>
                    &nbsp;
                    <button className="btn" onClick={() => HandleAction({ record, type: "delete" })}>
                        <FaTrash style={{ color: "red" }} size={20} />
                    </button>
                </div>
            ),
        }
    }

    return (
        <>
            <AntdTable dataSource={rows} columns={tableColumns} pagination={{ position: ["bottomCenter"] }} />
        </>
    )
}

export default Table;