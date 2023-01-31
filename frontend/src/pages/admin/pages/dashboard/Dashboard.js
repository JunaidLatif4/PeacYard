import React from 'react'
import { BsBell, BsPlus } from 'react-icons/bs'
import LineGraph from '../../components/graph/LineGraph'
import "./dashboard.scss"
const Dashboard = () => {

  return (
    <div id="dashboard">
      <div className='dashbaord-header'>
        <h1> Dashboard </h1>
        <button className='simple-btn'>
          <BsBell size={25} />
        </button>
      </div>
      <div className='dashboard-content'>
        <button className='simple-btn'>
          <BsPlus size={25} />
        </button>
        <div className='card-container'>
          <div className='card'>
            <h4>User Financial</h4>
            <div className='card-details'>
              <p>Saved Designs: 23 (Potential Value 621 000 kr)</p>
              <p>Pending Offers: 2 (Potential Value: 65 000 kr)</p>
              <p>Pending Orders: 16 (Potential Value: 484 000 kr)</p>
              <p>Closed Orders: 31 (value: 755 000 kr)</p>
              <p>Total Commission YTD: 55 000 kr (2021: 85 000 kr)</p>
            </div>
          </div>
          <div className='graph'>
            <div className='chart'>
              <LineGraph />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='card'>
            <h4>Group Financial</h4>
            <div className='card-details'>
              <p>Saved Designs: 221 (Potential Value 6 211 000 kr)</p>
              <p>Pending Offers: 21 (Potential Value: 652 000 kr)</p>
              <p>Pending Orders: 55 (Potential Value: 984 000 kr)</p>
              <p>Closed Orders: 101 (value: 1 755 000 kr)</p>
              <p>Total Commission YTD: 1 343 000 kr (2021: 785 000 kr)</p>
            </div>
          </div>
          <div className='graph'>
            <div className='chart'>
              <LineGraph />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='card'>
            <h4>Site Financial</h4>
            <div className='card-details'>
              <p>Saved Designs: 221 (Potential Value 6 211 000 kr)</p>
              <p>Pending Offers: 2 (Potential Value: 65 000 kr)</p>
              <p>Pending Orders: 16 (Potential Value: 484 000 kr)</p>
              <p>Closed Orders: 31 (value: 755 000 kr)</p>
              <p>Total Commission YTD: 55 000 kr (2021: 85 000 kr)</p>
            </div>
          </div>
          <div className='graph'>
            <div className='chart'>
              <LineGraph />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='card'>
            <h4>User Financial</h4>
            <div className='card-details'>
              <p>Saved Designs: 23 (Potential Value 621 000 kr)</p>
              <p>Pending Offers: 2 (Potential Value: 65 000 kr)</p>
              <p>Pending Orders: 16 (Potential Value: 484 000 kr)</p>
              <p>Closed Orders: 31 (value: 755 000 kr)</p>
              <p>Total Commission YTD: 55 000 kr (2021: 85 000 kr)</p>
            </div>
          </div>
          <div className='graph'>
            <div className='chart'>
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
