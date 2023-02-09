import React, { useState } from 'react'

// MUI | ANT-D :
import { Modal, Box } from "@mui/material"
import { Button } from "antd"

// Assets | Ant-D :
import { AiFillCloseCircle } from "react-icons/ai"
import ProfileIMG from "../../assets/img/profile.png"

// CSS :
import "./ProfileModal.scss"



const defaultStyle = {
    position: 'absolute',
    top: '10%',
    left: '20%',
    right: '20%',
    bottom: '20%',
    // transform: 'translate(-50%, -50%)',
    // width: 350,
    // height: 540,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: ".5rem",
    py: 2,
    px: 2,
}
const HelpMenuModal = ({ openModal, setOpenModal }) => {

    const [selecteStep, setSelectedStep] = useState("profile")

    const changeStep = (step) => {
        setSelectedStep(step)
    }
    const handleClose = () => {
        setOpenModal(false)
    }
    return (
        <>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box sx={defaultStyle}>
                    <div className="profileContainer">
                        <div className="navigation">
                            <div className="title">
                                Settings
                            </div>
                            <div className="close" onClick={handleClose}>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className="box">
                            <div className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure distinctio in saepe nostrum vitae laudantium! Possimus aliquid illo, consectetur voluptatum nihil fugiat magni nulla nemo exercitationem voluptates ipsum, incidunt cupiditate.
                            </div>
                            <div className="links">
                                <div className={selecteStep == "profile" ? "selectedBtn" : "btn"} onClick={() => changeStep("profile")}>Profile</div>
                                <div className={selecteStep != "profile" ? "selectedBtn" : "btn"} onClick={() => changeStep("inter")}>Interface</div>
                            </div>
                            <div className="settingBox">
                                <div className="avaterBox">
                                    <div className="imgBox">
                                        <img src={ProfileIMG} alt="ERROR" />
                                    </div>
                                    <div className="btn">
                                        <Button> Upload New Profile Picture </Button>
                                    </div>
                                </div>
                                <div className="authBox">
                                    <div className="btn"><Button> Setup 2FA </Button></div>
                                    <div className="btn"><Button> Change Password </Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default HelpMenuModal