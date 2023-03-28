import React, { useState, useRef } from 'react'
import { Modal, Radio } from 'antd';
import { BsX } from 'react-icons/bs';
import AddCustomModel from './AddCustomModel';
import "./design.scss";
import { FaOpencart } from 'react-icons/fa';
const ServicesModal = () => {
    const colorBtn = useRef(null)

    const [selectedPane, setSelectedPane] = useState("Model");
    const [customModal, setCustomModal] = useState(false);

    const handlePanelChange = (e) => setSelectedPane(e.target.value);

    const toggleCustomModal = () => setCustomModal(!customModal);

    const handleOpenColor = () => {
        colorBtn.current.click();
    }

    return (
        <div className='services-modal'>
            <Modal open={customModal} width={"90vw"} style={{ top: 10 }} closeIcon={<BsX className='close-icon' size={20} />} footer={<></>} onCancel={toggleCustomModal}>
                <AddCustomModel />
            </Modal>
            <Radio.Group value={selectedPane} onChange={handlePanelChange} buttonStyle="solid">
                {
                    ["Model", "Color", "Base", "Options", "Accessories", "Services"]
                        .map((el, i) => (
                            <Radio.Button key={i} value={el}>{el}</Radio.Button>
                        ))
                }
            </Radio.Group>
            <br />
            <br />
            {
                selectedPane === "Model" &&
                <div className='justify-content-end' onClick={toggleCustomModal}>
                    <button className='theme-btn btn-pad'> Add Custom Modal Data </button>
                </div>
            }
            <br />
            <div className="all-modals customized-scrollbar">
                {
                    new Array(10).fill(10)
                        .map((el, i) => (
                            <div key={i} className='modal-details'>
                                <p className='text-center'>
                                    {selectedPane} &nbsp; Name
                                </p>
                                <div className={selectedPane == "Color" ? "color-img" : "modal-img"}>

                                </div>
                                <p className='text-center'> Price from </p>
                            </div>
                        ))
                }
            </div>
            {
                selectedPane === "Color" &&
                <div className='flexCenter'>
                    <div className="colorBtn" onClick={handleOpenColor}> Custom color +3000 kr </div>
                    <input ref={colorBtn} type="color" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} />
                </div>
            }
        </div>
    )
}

export default ServicesModal;
