import React, { useState } from 'react';

// ANT-D | MUI :
import { Button, Col, Modal, Row } from "antd"

// Assets | ICONS :
import { BsX } from "react-icons/bs";

// CSS :
import "./NewOffer.scss"
import { fontSize } from '@mui/system';






const NewOffer = ({ openModel, setOpenModel, toggleModel }) => {

    const [isCreated, setIsCreated] = useState(false)

    return (
        <>
            <Modal centered open={openModel} onCancel={toggleModel} footer={<></>} closeIcon={<BsX className='close-icon' size={20} />}>
                <div className="newOfferModelContainer">
                    <div className="title">Create and send new Offer</div>
                    <div className="box">
                        {
                            isCreated ?
                                <>
                                    <div className="details">
                                        <p> Offer: VS-OFFER-2022-1234 was created and sent to client.</p>
                                        <p> The attached personalized note from you was:</p>
                                        <p> Customer Name: John Doe</p>
                                        <p> Customer email: john@doe.com</p>
                                    </div>
                                    <div style={{ margin: ".5rem" }}>
                                        <div className="inputField form-group">
                                            <div className="label">You included a personal note to client:</div>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className="para">
                                            If the client agrees to the o!er by clicking the agree button in the email and fills out the
                                            required details for the cemetery, an order and an invoice will be created and the client can opt
                                            to pay online right away or you can get in touch with them to guide them in the right direction
                                            with the invoice
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="form form-group">
                                        <div className='inputField' style={{ width: "100px" }}>
                                            <label> Design ID </label>
                                            <select>
                                                <option> 1234 </option>
                                                <option> 7868 </option>
                                                <option> 3422 </option>
                                            </select>
                                        </div>
                                        <div className="inputField">
                                            <div className="label">Note to Client</div>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                </>
                        }
                        <div className="productdetaiil">
                            <div className="imgsection">
                                <div className="productimg">
                                </div>
                                <div className="imgbuttons">
                                    <button className='theme-btn'>Download Design img</button>
                                    <button className='theme-btn'>Create & Download Application PDF</button>
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
                                        <button className="theme-btn" onClick={() => setIsCreated(!isCreated)}>Create and send Customer Offer</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NewOffer