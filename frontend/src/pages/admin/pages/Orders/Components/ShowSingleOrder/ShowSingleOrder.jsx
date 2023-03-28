import React, { useState } from 'react'

// MUI | ANT-D :
import { Modal, Button, Select } from 'antd'

// Assets | ICONS :
import { BsX } from "react-icons/bs";

// CSS :
import "./ShowSingleOrder.scss"





const showSingleOrderModal = ({ openModel, setOpenModel, toggleModel }) => {

    return (
        <>
            <Modal centered open={openModel} footer={<></>} onCancel={toggleModel} closeIcon={<BsX className='close-icon' size={20} />}>
                <div className="showSingleOrderModalContainer">
                    <h1 className='theme-text'> Order </h1>

                </div>

            </Modal>
        </>
    )
}

export default showSingleOrderModal