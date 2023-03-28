import React, { useState } from 'react'

// MUI | ANT-D :
import { Modal, Button, Select } from 'antd'

// Assets | ICONS :
import { BsX } from "react-icons/bs";



const CreateOrderModal = ({ openModel, setOpenModel, toggleModel }) => {

    const [options, setOptions] = useState([
        { label: "1234 - My fathers stone - Erica Gogalla", value: 1 },
        { label: "1235 - My fathers stone - Erica Gogalla", value: 2 },
        { label: "1236 - My fathers stone - Erica Gogalla", value: 3 },
        { label: "1237 - My fathers stone - Erica Gogalla", value: 4 },
        { label: "1238 - My fathers stone - Erica Gogalla", value: 5 },
        { label: "1239 - My fathers stone - Erica Gogalla", value: 6 },
        { label: "1214 - My fathers stone - Erica Gogalla", value: 7 },
        { label: "1224 - My fathers stone - Erica Gogalla", value: 8 },
        { label: "2234 - My fathers stone - Erica Gogalla", value: 9 },
        { label: "1244 - My fathers stone - Erica Gogalla", value: 10 },
        { label: "1254 - My fathers stone - Erica Gogalla", value: 11 },
        { label: "1264 - My fathers stone - Erica Gogalla", value: 12 },
        { label: "1274 - My fathers stone - Erica Gogalla", value: 13 },
        { label: "1284 - My fathers stone - Erica Gogalla", value: 14 },
        { label: "1294 - My fathers stone - Erica Gogalla", value: 15 },
        { label: "1334 - My fathers stone - Erica Gogalla", value: 16 },
        { label: "1434 - My fathers stone - Erica Gogalla", value: 17 },
    ])

    return (
        <>
            <Modal centered open={openModel} footer={<></>} onCancel={toggleModel} closeIcon={<BsX className='close-icon' size={20} />}>
                <h1 className='theme-text'> Create Order </h1>
                <div className="form-group">
                    <div>
                        <label> Design ID </label>
                    </div>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                        defaultValue={[2, 9]}
                        options={options}
                    />
                </div> &nbsp;
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="primary">
                        Create Order/s
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default CreateOrderModal