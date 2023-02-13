import React from 'react'
import { useNavigate } from "react-router"

// MUI | ANT-D :
import { Modal, Box } from "@mui/material"
import { Button } from "antd"

// Assets | Ant-D :
import { AiFillCloseCircle } from "react-icons/ai"

// CSS :
import "./LogOutModal.scss"



const defaultStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // right: '20%',
    // bottom: '20%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    // height: 540,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: ".5rem",
    py: 2,
    px: 2,
}
const LogOutModel = ({ openModal, setOpenModal }) => {
    const Navigate = useNavigate()

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
                    <div className="logoutContainer">
                        <div className="navigation">
                            <div className="title">
                                Logout
                            </div>
                            <div className="close" onClick={handleClose}>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className="box">
                            <div className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure distinctio in saepe nostrum vitae laudantium! Possimus aliquid illo, consectetur voluptatum nihil fugiat magni nulla nemo exercitationem voluptates ipsum, incidunt cupiditate.
                            </div>
                            <div className="btnBox">
                                <Button className='btn' onClick={() => Navigate("/")} > Logout </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default LogOutModel