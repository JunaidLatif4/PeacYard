import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { BsX } from 'react-icons/bs';
import ServicesModal from './ServicesModal';
import DesignCreated from './Components/DesignCreated/DesignCreated';

const DesignAside = () => {
    const [configurationModal, setConfigurationModal] = useState(false);
    const [createTemplateModal, setCreateTemplateModal] = useState(false);

    const [openDesignCreatedModel, setOpenDesignCreatedModel] = useState(false);

    const toggleConfigurationModal = () => setConfigurationModal(!configurationModal);
    const toggleCreateTemplateModal = () => setCreateTemplateModal(!createTemplateModal);
    const toggleDesignCratedModal = () => setOpenDesignCreatedModel(!openDesignCreatedModel);

    return (
        <>
            <aside className='design-aside-menu'>
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
                <h1 className='theme-text'>Model: No model selected</h1>
                <h3 className='theme-text'>Price as configured: 0 kr</h3>
                <hr />
                <p className='theme-text'>No option selected</p>

                <button onClick={toggleConfigurationModal} className='theme-btn btn-pad configure-btn'> Configure Model, Options and Services </button>
                <div className='_3d-view'>

                </div>
                <div className='_3d-view-actions'>
                    <button className='theme-btn btn-pad'> See Dimensions </button>
                    <button className='theme-btn btn-pad'> Download </button>
                </div>
                <div className='design-notes'>
                    <div>
                        <label className='theme-text' htmlFor="design-notes">Notes</label>
                    </div>
                    <textarea id="design-notes" />
                </div>
                <div className='_3d-view-actions'>
                    <button className='theme-btn btn-pad' onClick={toggleDesignCratedModal}> Create </button>
                    <button className='theme-btn btn-pad' onClick={toggleCreateTemplateModal}> Create Template </button>
                </div>
            </aside>
            <DesignCreated openModel={openDesignCreatedModel} setOpenModel={setOpenDesignCreatedModel} toggleModel={toggleDesignCratedModal} />
        </>
    )
}

export default DesignAside
