import React from 'react'
import { Button, Col, Row } from "antd"
import { BsPlus } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "./design.scss";
const AddCustomModel = () => {
  return (
    <section id='custom-modal'>
      <h1> Add Custom Model Design Data </h1>
      <Row gutter={20} className='model-upload-container'>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <p className='text-center'>Front/Design Image</p>
          <div className='model-upload-view'>

          </div>
          <div className='model-upload-action-div'>
            <input type="file" />
            <Button type="primary"> Upload </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <p className='text-center'>3d Image</p>
          <div className='model-upload-view'>

          </div>
          <div className='model-upload-action-div'>
            <input type="file" />
            <Button type="primary"> Upload </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <p className='text-center'>Dimension Image</p>
          <div className='model-upload-view'>

          </div>
          <div className='model-upload-action-div'>
            <input type="file" />
            <Button type="primary"> Upload </Button>
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={30}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <p>Design notes to customer</p>
          <div className="form-group">
            <textarea className='input'></textarea>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <p>Design notes to customer</p>
          <div className="form-group">
            <textarea className='input'></textarea>
          </div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="form-group">
            <div>
              <label> Custom model name </label>
            </div>
            <input type="text" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="form-group">
            <div>
              <label> Custom model price </label>
            </div>
            <input type="number" />
          </div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col xs={24} sm={24} md={2} lg={2} xl={2}></Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="form-group">
            <div>
              <label> Custom option name </label>
            </div>
            <input type="text" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="form-group">
            <div>
              <label> Internal Note </label>
            </div>
            <input type="text" />
          </div>
        </Col>
        <Col xs={18} sm={20} md={6} lg={6} xl={6}>
          <div className="form-group">
            <div>
              <label> Custom Option price </label>
            </div>
            <input type="text" />
          </div>
        </Col>
        <Col xs={6} sm={4} md={4} lg={4} xl={4}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='upload-model-detail-div'>
              <div>
                <label className='theme-text'> Billable </label>
              </div>
              <input type="checkbox" />
            </div>
            <div style={{ paddingTop: "25px" }}>
              <Button shape='circle' type='primary' style={{ backgroundColor: "green" }}>
                +
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <FaBars size={20} />
        </Col>
        <Col xs={17} sm={17} md={15} lg={15} xl={15}>
          <p>
            Custom large grave frame with metal inlays and two dividers as per supplied image
          </p>
        </Col>
        <Col xs={3} sm={3} md={4} lg={4} xl={4}>
          <p>SEK 22 000 kr</p>
        </Col>
        <Col xs={3} sm={3} md={4} lg={4} xl={4}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='upload-model-detail-div'>
              <input type="checkbox" />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <Button shape='circle' type='primary' style={{ backgroundColor: "red", fontWeight: "bolder" }}>
                -
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <FaBars size={20} />
        </Col>
        <Col xs={17} sm={17} md={15} lg={15} xl={15}>
          <p>
            Custom advanced installation
          </p>
        </Col>
        <Col xs={3} sm={3} md={4} lg={4} xl={4}>
          <p>SEK 8 000 kr</p>
        </Col>
        <Col xs={3} sm={3} md={4} lg={4} xl={4}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='upload-model-detail-div'>
              <input type="checkbox" />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <Button shape='circle' type='primary' style={{ backgroundColor: "red", fontWeight: "bolder" }}>
                -
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button type='primary'> Add Custom Design Data to New Design </Button>
      </div>
    </section>
  )
}

export default AddCustomModel
