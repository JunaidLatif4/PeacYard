import React, { useState } from 'react';

// ANT-D | MUI :
import { Button, Col, Modal, Row } from "antd"

// Assets | ICONS :
import { BsX } from "react-icons/bs";

// CSS :
import "./OfferRequest.scss"
import { fontSize } from '@mui/system';






const OfferRequest = ({ openModel, setOpenModel, toggleModel }) => {

    const [isCreated, setIsCreated] = useState(false)

    return (
        <>
            <Modal centered open={openModel} onCancel={toggleModel} footer={<></>} closeIcon={<BsX className='close-icon' size={20} />}>
                <div className="offerRequestModalContainer">
                    <div className="title">View offer request</div>
                    <div className="subTitle">Design Name: my dogs monument</div>
                    <div className="offerDetaiils">
                        <div className="offerForm">
                            <div className="form-group">
                                <div>
                                    <label> Design ID </label>
                                </div>
                                <select>
                                    <option> 1234 </option>
                                    <option> 7868 </option>
                                    <option> 3422 </option>
                                </select>
                            </div>
                            <div className="form form-group">
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>First Name</p>
                                        <input type="text" placeholder='Emely' />
                                    </div>
                                    <div className="inputField">
                                        <p className='label'>Last Name</p>
                                        <input type="text" placeholder='Emely' />
                                    </div>
                                </div>
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>Email</p>
                                        <input type="email" placeholder='abc@gmail.com' />
                                    </div>
                                </div>
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>Phone #</p>
                                        <input type="text" placeholder='+41237273947982' />
                                    </div>
                                </div>
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>Installation Location</p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>Note for requestor</p>
                                        <textarea type="text" />
                                    </div>
                                </div>
                                <div className="flexLine">
                                    <div className="flexLine">
                                        <input type="checkbox" className='checkbox' /> <p className='checkBoxLabel'>I want you to install my headstone (+ 3 499 kr)</p>
                                    </div>
                                    <Button> Download Design Image </Button>
                                </div>
                                <div className="flexLine">
                                    <div className="flexLine">
                                        <input type="checkbox" className='checkbox' /> <p className='checkBoxLabel'>I want help with my design (+ 999 kr)</p>
                                    </div>
                                    <Button> Download Application PDF </Button>
                                </div>
                                <div className="flexEnd">
                                    <Button> Load and/or edit design in designer </Button>
                                </div>
                                <hr />
                                <div className="flexLine">
                                    <div className="inputField">
                                        <p className='label'>Note for Client</p>
                                        <textarea type="text" />
                                    </div>
                                </div>
                                <div className="flexCenter">
                                    <Button>
                                        Create and send Customer Offer
                                    </Button>
                                </div>
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
                            <div className="imgsection">
                                <div className="productimg">
                                </div>
                            </div>
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

export default OfferRequest