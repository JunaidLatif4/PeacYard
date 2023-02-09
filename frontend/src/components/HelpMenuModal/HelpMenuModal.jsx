import React from 'react'

// MUI | ANT-D :
import { Modal, Box } from "@mui/material"

// Assets | Ant-D :
import { AiFillCloseCircle } from "react-icons/ai"

// CSS :
import "./HelpMenuModal.scss"



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
                                Help Menu
                            </div>
                            <div className="close" onClick={handleClose}>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className="box">
                            <div className="para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere corrupti maxime consequuntur soluta nulla, cumque ullam est, iusto, voluptates eveniet animi. In deserunt reprehenderit ipsa animi corrupti, voluptatum perspiciatis.
                            </div>
                            <div className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae est sed omnis aspernatur nemo vel consectetur hic incidunt, mollitia sit ratione iste, libero eveniet ad explicabo quisquam corrupti dignissimos dolore ipsa ducimus sequi numquam! Cumque nam quos sint reprehenderit modi, impedit sit suscipit pariatur, dicta, optio praesentium? Perspiciatis deleniti asperiores, quidem adipisci itaque nostrum unde blanditiis qui, nisi ut amet.
                            </div>
                            <div className="para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, laudantium. Quam consectetur vel est quis, odio ad explicabo consequuntur quaerat eligendi sapiente architecto distinctio autem ipsum totam neque. Nostrum molestias quisquam sapiente, asperiores ducimus repellendus placeat, totam esse dolores aperiam non iusto aspernatur quae? Voluptates quibusdam suscipit architecto reiciendis enim molestiae maxime voluptatum asperiores tempora nesciunt repellendus ex deleniti quidem accusantium pariatur expedita vel voluptatem assumenda vero, tenetur eum maiores velit aliquid? Deleniti facilis nisi alias placeat natus perspiciatis assumenda minus nam eaque veniam laborum consequuntur tenetur ipsum sed officiis, explicabo sequi dolorem eius quae. Eum quaerat assumenda, nisi nulla cupiditate porro possimus quia omnis maiores. Fugiat recusandae odio cupiditate, voluptatibus doloribus corrupti molestiae magnam, sed debitis nobis neque ut sapiente quos ipsam repellat? Quod veritatis, at provident magnam eaque eveniet sit dolorem iusto neque distinctio tempora culpa autem natus accusantium labore vitae ducimus et cupiditate saepe earum consequatur quae! Deserunt vitae, at adipisci ea mollitia amet provident commodi voluptas laborum porro omnis sunt molestias ipsa fuga aut, deleniti sapiente aspernatur itaque magni? Consequuntur, sequi quisquam. Animi consequatur aut nulla!
                            </div>
                            <div className="para">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum optio, eos totam voluptatibus deserunt eum autem voluptatum nemo fugiat ullam unde pariatur doloremque architecto dolore dicta sequi consequuntur eius distinctio eaque nostrum. Quis accusantium inventore dolore similique rerum mollitia qui deserunt quam. Quia suscipit, deserunt in iusto beatae quis ab illo totam neque harum saepe atque rem a minus aliquid vel reiciendis corrupti nihil explicabo nisi. Impedit deserunt saepe perspiciatis animi non nisi perferendis corporis explicabo error nulla vel fuga amet, ad ex, eveniet magni tempore incidunt aliquam est libero, dolores quae praesentium quam. Debitis laborum dolores quam cumque sunt. Blanditiis alias vitae quae adipisci. Quaerat fugit aspernatur fugiat illum eos facere recusandae earum eum, nisi velit blanditiis sequi repudiandae, quasi eaque, distinctio corporis quidem iste veritatis inventore explicabo magnam. Suscipit eum excepturi minus! A dolorem minus voluptatum numquam quam libero sunt nam saepe sequi, quo repellendus molestias doloribus obcaecati. Deleniti numquam expedita doloremque nobis in nulla perspiciatis voluptate beatae ipsam autem tenetur animi voluptatem laudantium eos reiciendis repellendus, officiis rem error nesciunt non molestiae quisquam? Deserunt sint laborum totam labore quisquam error officia quibusdam soluta quae modi est doloremque, omnis odio facilis earum nam excepturi eaque, ad consectetur ut temporibus? Optio, fugit? Facilis amet, commodi voluptate quidem ducimus et, libero tenetur magni, sint vel in repudiandae accusamus ea. Eum minus, repellat officiis impedit quas nemo facere quod consequuntur, deleniti ex a, fugiat sed unde nisi laboriosam ducimus suscipit. Excepturi dolorum pariatur sit optio itaque dolorem quae saepe modi suscipit dicta nemo sed, quasi ratione eos laboriosam rerum. Illo, ipsum perspiciatis ex veritatis voluptate consequuntur delectus, porro vero non quia quas. Odio porro hic dolores, officiis, nisi id recusandae cupiditate possimus minus ea, ex atque sit debitis nesciunt facere aliquid dolore ducimus asperiores perspiciatis deleniti facilis soluta voluptates nobis esse.
                            </div>
                            <div className="para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic facere explicabo ratione excepturi natus placeat laboriosam, a sit quia, blanditiis enim. Ex eius nulla quisquam repudiandae qui nemo quaerat earum fugiat cum autem voluptatibus facere repellat, amet libero. Provident quaerat, animi quae nostrum est minus optio molestias illo harum.
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default HelpMenuModal