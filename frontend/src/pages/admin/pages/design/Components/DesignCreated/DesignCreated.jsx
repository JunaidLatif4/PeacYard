import React, { useState } from 'react';

// ANT-D | MUI :
import { Button, Col, Modal, Row } from "antd"

// Assets | ICONS :
import { BsX } from "react-icons/bs";

// CSS :
import "./DesignCreated.scss"
import { fontSize } from '@mui/system';






const DesignCreated = ({ openModel, setOpenModel, toggleModel }) => {

    const [isCreated, setIsCreated] = useState(false)

    return (
        <>
            <Modal centered open={openModel} onCancel={toggleModel} footer={<></>} closeIcon={<BsX className='close-icon' size={20} />}>
                <div className="designCreateModelContainer">
                    <div className="title">Design Created: &#60;design name&#62;,ID 1234</div>
                    <div className="details">
                        <p>Design has been emailed to customer email: john@doe.com</p>
                        <p>Customer Name: John Doe</p>
                        <p>Customer Phone #: 415-555-1234</p>
                        <p>You can find this design in the “designs” menu item to the left. The global design ID is 1234.</p>
                        <p>Please refer to this id in the future</p>
                    </div>
                    <div className="productdetaiil">
                        <div className="imgsection">
                            <div className="productimg">
                            </div>
                            <div className="imgbuttons">
                                <button className='theme-btn'>Download Design img</button>
                                <button className='theme-btn' onClick={() => setIsCreated(!isCreated)}>Create & Download Application PDF</button>
                            </div>
                        </div>
                        <div className="modeldetail">
                            <div className='title' >Modell : Ada</div>
                            <h4>Price as configured:39 595 kr</h4>
                            <div className="line"></div>
                            <li> Headstone, Model Ada 6 999 kr</li>
                            <li>  Wide Standard Base 7 999 kr</li>
                            <li> Square Planter 7 999 kr</li>
                            <li> Professional Design Service: 3 999 kr</li>
                            <li>Vitastenar Installation service 3 599 kr</li>
                            <div className="flexCenter">
                                <button className='theme-btn'>See 3D view</button>
                                <button className='theme-btn'>See Dimension View</button>
                            </div>
                            {
                                !isCreated &&
                                <div className="flexCenter">
                                    <button className='theme-btn'>Create and send Customer Offer</button>
                                </div>
                            }
                            {
                                isCreated &&
                                <div className="accessTableBox">
                                    <div className="accessDetails">
                                        <p>Design Last Access</p>
                                        <p>Total Accesses: 22</p>
                                    </div>
                                    <div className="table">
                                        <table>
                                            <tr>
                                                <th>Date</th>
                                                <th>IP</th>
                                                <th>Device</th>
                                                <th>Agent</th>
                                            </tr>
                                            <tr>
                                                <td>022-05-20 10:31:31</td>
                                                <td>193.14.200.199</td>
                                                <td>Desktop</td>
                                                <td>View</td>
                                            </tr>
                                            <tr>
                                                <td>022-05-20 10:31:31</td>
                                                <td>193.14.200.199</td>
                                                <td>Desktop</td>
                                                <td>View</td>
                                            </tr>
                                            <tr>
                                                <td>022-05-20 10:31:31</td>
                                                <td>193.14.200.199</td>
                                                <td>Desktop</td>
                                                <td>View</td>
                                            </tr>
                                            <tr>
                                                <td>022-05-20 10:31:31</td>
                                                <td>193.14.200.199</td>
                                                <td>Desktop</td>
                                                <td>View</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        isCreated &&
                        <div className="flexCenter">
                            <button className="theme-btn">Create and send Customer O!er</button>
                        </div>
                    }
                </div>
            </Modal>
        </>
    )
}

export default DesignCreated