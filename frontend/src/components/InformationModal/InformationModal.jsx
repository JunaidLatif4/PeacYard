import React from 'react'

// MUI | ANT-D :
import { Modal, Box } from "@mui/material"

// Assets | Ant-D :
import { AiFillCloseCircle } from "react-icons/ai"

// CSS :
import "./InformationModal.scss"



const defaultStyle = {
    position: 'absolute',
    top: '5%',
    left: '15%',
    right: '2%',
    bottom: '2%',
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
                    <div className="helpMenuContainer">
                        <div className="navigation">
                            <div className="title">
                                Information
                            </div>
                            <div className="close" onClick={handleClose}>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className="box">
                            <div className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae est sed omnis aspernatur nemo vel consectetur hic incidunt, mollitia sit ratione iste, libero eveniet ad explicabo quisquam corrupti dignissimos dolore ipsa ducimus sequi numquam! Cumque nam quos sint reprehenderit modi, impedit sit suscipit pariatur, dicta, optio praesentium? Perspiciatis deleniti asperiores, quidem adipisci itaque nostrum unde blanditiis qui, nisi ut amet.
                            </div>
                            <div className="info">
                                <p> <span>Software :</span>  Peaceyard Suite</p>
                                <p> <span>Software Version :</span>  10</p>
                                <p> <span>Memory Usage :</span>  128MB</p>
                            </div>
                            <div className="para">
                                <p> <span> Server Information :</span> </p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, laudantium. Quam consectetur vel est quis, odio ad explicabo consequuntur quaerat eligendi sapiente architecto distinctio autem ipsum totam neque. Nostrum molestias quisquam sapiente, asperiores ducimus repellendus placeat, totam esse dolores aperiam non iusto aspernatur quae? Voluptates quibusdam suscipit architecto reiciendis enim molestiae maxime voluptatum asperiores tempora nesciunt repellendus ex deleniti quidem accusantium pariatur expedita vel voluptatem assumenda vero, tenetur eum maiores velit aliquid? Deleniti facilis nisi alias placeat natus perspiciatis assumenda minus nam eaque veniam laborum consequuntur tenetur ipsum sed officiis, explicabo sequi dolorem eius quae. Eum quaerat assumenda, nisi nulla cupiditate porro possimus quia omnis maiores. Fugiat recusandae odio cupiditate, voluptatibus doloribus corrupti molestiae magnam, sed debitis nobis neque ut sapiente quos ipsam repellat? Quod veritatis, at provident magnam eaque eveniet sit dolorem iusto neque distinctio tempora culpa autem natus accusantium labore vitae ducimus et cupiditate saepe earum consequatur quae! Deserunt vitae, at adipisci ea mollitia amet provident commodi voluptas laborum porro omnis sunt molestias ipsa fuga aut, deleniti sapiente aspernatur itaque magni? Consequuntur, sequi quisquam. Animi consequatur aut nulla!
                            </div>
                            <div className="info">
                                <p> <span> System Time :</span> 10:22:38 (UTC)</p>
                                <p> <span> Company Time:</span> 11:22:38 (GMT)</p>
                            </div>
                            <div className="info">
                                <p> <span> Site-id:</span> vitastenar-app</p>
                                <p> <span> User id:</span> robert@peaceyard.com</p>
                                <p> <span> Access groups:</span> Global Admin, Site Admin</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default HelpMenuModal