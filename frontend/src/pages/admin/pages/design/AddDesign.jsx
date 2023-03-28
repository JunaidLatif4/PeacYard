import React, { useState } from 'react';
import { Button, Col, Modal, Row } from "antd"


import DesignAside from './DesignAside';
// import DesignArea from './DesignArea';
import ServicesModal from './ServicesModal';
import { BsX } from "react-icons/bs";
import "./design.scss";

const AddDesign = () => {

    const [configurationModal, setConfigurationModal] = useState(false);
    const [createTemplateModal, setCreateTemplateModal] = useState(false);

    const toggleConfigurationModal = () => setConfigurationModal(!configurationModal);
    const toggleCreateTemplateModal = () => setCreateTemplateModal(!createTemplateModal);
    const toggleDesignCratedModal = () => setOpenDesignCreatedModel(!openDesignCreatedModel);


    return (
        <>
            <section id="add-design">
                <Modal centered open={configurationModal} footer={<></>} onCancel={toggleConfigurationModal} closeIcon={<BsX className='close-icon' size={20} />}>
                    <ServicesModal />
                </Modal>
                <Modal centered open={createTemplateModal} footer={<></>} onCancel={toggleCreateTemplateModal} closeIcon={<BsX className='close-icon' size={20} />}>
                    <h1 className='theme-text'> Save Template </h1>
                    <div style={{ display: "flex" }}>
                        <div className="form-group">
                            <div>
                                <label> Template Name </label>
                            </div>
                            <input type="text" />
                        </div> &nbsp;
                        <div className="form-group">
                            <div>
                                <label> Availability </label>
                            </div>
                            <select>
                                <option> Site </option>
                                <option> Company </option>
                                <option> Global </option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button type="primary">
                            Save
                        </Button>
                    </div>
                </Modal>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                        <div className='designing-area'>
                            {/* <DesignArea /> */}
                            <Row gutter={10}>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className='form-group'>
                                        <div>
                                            <label>Deisgn Name <span className="important">*</span></label>
                                        </div>
                                        <div>
                                            <input type="text" name="designName" required />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className='form-group'>
                                        <div>
                                            <label>First Name  <span className="important">*</span></label>
                                        </div>
                                        <div>
                                            <input type="text" name="firstName" required />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className='form-group'>
                                        <div>
                                            <label>Last Name  <span className="important">*</span></label>
                                        </div>
                                        <div>
                                            <input type="text" name="lastName" required />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={10}>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className='form-group'>
                                        <div>
                                            <label> Email <span className="important">*</span></label>
                                        </div>
                                        <div>
                                            <input type="email" name="email" required />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8}></Col>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className='form-group'>
                                        <div>
                                            <label>Phone <span className="important">*</span></label>
                                        </div>
                                        <div>
                                            <input type="tel" name="phone" required />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                        <DesignAside />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default AddDesign
