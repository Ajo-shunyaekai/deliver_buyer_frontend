import React, { useEffect, useState } from 'react';
import WorldMap from "react-svg-worldmap";
import { Link } from 'react-router-dom';
import dashboards from '../style/dashboard.css'
import trending from "../assest/trendingup.svg"
import Arrow from "../assest/arrow.svg"
import Form from 'react-bootstrap/Form';
import ThreeDot from '../assest/three-dot.svg'
import LineChart from '../components/chart/LineChart'
import ProgressBar from './chart/ProgressBar';
import OrangeBar from './chart/OrangeBar'
import PinkBar from './chart/PinkBar'
import CircularBar from './chart/CircularBar';
import WeeklyBar from './chart/WeeklyBar';
import MonthlyBar from './chart/MonthlyBar';
import ConversionChart from '../components/chart/ConversionChart';
import SearchEngineChart from './chart/SearchEngineChart'
import DirectlyChart from './chart/DirectlyChart'
const Dashboard = () => {

    const [countryData, setCountryData] = useState([]);
    const [activeButton, setActiveButton] = useState('1h');
    const handleButtonClick = (value) => {
        setActiveButton(value);
    };
    return (

        <>
            <div className='dashboard-section'>
                <div className='dashboard-heading'>Dashboard</div>
                <div className='analystic-button' >
                    <div className='buttons'>Analytics</div>
                </div>
                {/* start the card container */}
                <div className='cart-main-container'>
                    <div className='cart-left-main-container'>
                        <div className='cart-left-top-section'>
                            <div className='cart-top-right-section'>
                                <div className='top-container'>
                                    <Link to='/completed-orders'>
                                        <div className='top-content-section'>
                                            <div className='top-head'>Completed Orders</div>
                                            <div className='top-text'>20</div>
                                        </div>
                                    </Link>
                                    <Link to='/ongoing-orders'>
                                        <div className='top-content-section'>
                                            <div className='top-head'>Ongoing Orders</div>
                                            <div className='top-text'>50</div>
                                        </div>
                                    </Link>
                                    <Link to='/pending-orders'>
                                        <div className='top-content-section'>
                                            <div className='top-head'>Pending Orders</div>
                                            <div className='top-text'>100</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='bottom-container'>
                                    <div className='bottom-cart-cont'>
                                        <div className='bottom-head'>Payment Due:<span className='bottom-text'> 65</span></div>
                                        <div className='bottom-graph'>
                                            <ProgressBar />
                                        </div>
                                    </div>
                                    <div className='bottom-cart-cont'>
                                        <div className='bottom-head'> Invoice Due:<span className='bottom-text'> 25</span></div>
                                        <div className='bottom-graph'>
                                            <OrangeBar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cart-top-left-section'>
                                <div className='left-head'>Total Purchase</div>
                                <div className='circular-process'>
                                    <CircularBar />
                                </div>
                            </div>
                        </div>
                        <div className='cart-left-bottom-section'>
                            <div className='cart-left-bottom-container'>
                                <div className='left-bottom-cart-top'>
                                    <span className='left-bottom-pert'>30</span>
                                    <span className='left-bottom-plus'>+3.5</span>
                                </div>
                                <div className='left-bottom-head'>Lorem</div>
                                <div className='line-chart-graph'>
                                    <ConversionChart />
                                </div>
                            </div>
                            <div className='cart-left-bottom-container'>
                                <div className='left-bottom-cart-top'>
                                    <span className='left-bottom-pert'>25</span>
                                    <span className='left-bottom-plus'>-2.0</span>
                                </div>
                                <div className='left-bottom-head'>Lorem</div>
                                <div className='line-chart-graph'>
                                    <SearchEngineChart />
                                </div>
                            </div>
                            <div className='cart-left-bottom-container'>
                                <div className='left-bottom-cart-top'>
                                    <span className='left-bottom-pert'>40</span>
                                    <span className='left-bottom-plus'>+4.5</span>
                                </div>
                                <div className='left-bottom-head'>Lorem</div>
                                <div className='line-chart-graph'>
                                    <DirectlyChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-right-main-container'>
                        <div className='map-container'>
                            <WorldMap
                                color="red"
                                value-suffix="people"
                                size="sm"
                                data={countryData}
                            />
                        </div>
                        <div className='right-head'>Your seller countries</div>
                        <div className='right-country-section'>
                            <div className='country-sect'>
                                <span className='country-names'>USA</span>
                                <span className='country-price'>$2340</span>
                            </div>
                            <div className='country-sect'>
                                <span className='country-name'>UK</span>
                                <span className='country-price'>$2345</span>
                            </div>
                            <div className='country-sect'>
                                <span className='country-name'>India</span>
                                <span className='country-price'>$1234</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end the card conatiner */}
                {/* start the bottom container */}
                {/* <div className='main-bottom-cart-container'>
                    <div className='bottom-section-left-cont'>
                        <div className='bottom-first-sections'>
                            <div className='bottom-img-cont'>
                                <img src={trending} />
                            </div>
                            <div className='bottom-text-cont'>
                                <div className='bottom-text-head'>Weekly top sell</div>
                                <div className='bottom-text-pect'>+ 2.50%</div>
                            </div>
                        </div>
                        <div className='bottom-arrow-cont'>
                            <img src={Arrow} />
                        </div>
                    </div>
                    <div className='bottom-section-right-cont'>
                        <div className='bottom-cont-left-sec'>
                            <div className='bottom-cont-left-head'>Task statistics</div>
                            <div className='bottom-cont-left-cart'>
                                <div className='bottom-cont-left-one'>
                                    <div className='bottom-cont-left-text'>52</div>
                                    <div className='bottom-cont-left-num'>Tasks</div>
                                </div>
                                <div className='bottom-cont-left-one'>
                                    <div className='bottom-cont-left-texts'>+15</div>
                                    <div className='bottom-cont-left-num'>Added</div>
                                </div>
                                <div className='bottom-cont-left-one'>
                                    <div className='bottom-cont-left-text'>45.5%</div>
                                    <div className='bottom-cont-left-num'>Remain</div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-cont-right-sec'>
                            <div className='bottom-cont-right-sec-head'>This week</div>
                            <div className='bottom-cont-right-sec-completion'>
                                <div className='bottom-cont-right-sections-head'>Task completion</div>
                                <div className='bottom-cont-right-sect-progress'> <PinkBar /> <span className='bottom-cont-right-cont-pinkbar'>65%</span> </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* end the botom container */}
                {/* start the graph container */}
                {/* <div className='graph-main-container'>
                    <div className='graph-left-container'>
                        <div className='graph-top-left-cont'>
                            <div className='graph-top-weekly'>
                                <div className='graph-topweekly-circu-bar'>
                                    <WeeklyBar />
                                </div>
                                <div className='graph-topweekly-head'>Weekly</div>
                            </div>
                            <div className='graph-top-weekly'>
                                <div className='graph-topweekly-circu-bar'>
                                    <MonthlyBar />
                                </div>
                                <div className='graph-topweekly-head'>Monthly</div>
                            </div>
                        </div>
                        <div className='graph-bottom-left-cont'>
                            <div className='graph-toogle-section'>
                                <div className='graph-toogle-head'>
                                    <div className='graph-toogle-main-text'>Upcoming tasks</div>
                                    <div className='graph-toogle-content'>Active: 9</div>
                                </div>
                                <div className='graph-toggle-button'>
                                    <label className={`btn ${activeButton === '1h' ? 'active' : ''}`} onClick={() => handleButtonClick('1h')}>
                                        <input type="radio" name="options" /> 1h
                                    </label>
                                    <label className={`btn ${activeButton === '1d' ? 'active' : ''}`} onClick={() => handleButtonClick('1d')}>
                                        <input type="radio" name="options" /> 1d
                                    </label>
                                </div>
                            </div>
                            <div className='graph-checkbox-main-container'>
                                <div className='graph-check-section'>
                                    <div className='graph-checkbox'>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" onChange={() => { }} />
                                            <span className='checkbox-heading-graph'>Html5 dashboard conference</span>
                                            <span className='checkbox-heading-graph-light'>Less than a month till we head over to...</span>
                                        </label>
                                    </div>
                                    <div className='graph-check-icon'>
                                        <img src={ThreeDot} />
                                    </div>
                                </div>
                                <div className='graph-check-section'>
                                    <div className='graph-checkbox'>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" onChange={() => { }} />
                                            <span className='checkbox-heading-graph'>Html5 dashboard conference</span>
                                            <span className='checkbox-heading-graph-light'>Less than a month till we head over to...</span>
                                        </label>
                                    </div>
                                    <div className='graph-check-icon'>
                                        <img src={ThreeDot} />
                                    </div>
                                </div>
                                <div className='graph-check-section'>
                                    <div className='graph-checkbox'>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" onChange={() => { }} />
                                            <span className='checkbox-heading-graph'>Html5 dashboard conference</span>
                                            <span className='checkbox-heading-graph-light'>Less than a month till we head over to...</span>
                                        </label>
                                    </div>
                                    <div className='graph-check-icon'>
                                        <img src={ThreeDot} />
                                    </div>
                                </div>
                                <div className='graph-check-section'>
                                    <div className='graph-checkbox'>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" onChange={() => { }} />
                                            <span className='checkbox-heading-graph'>Html5 dashboard conference</span>
                                            <span className='checkbox-heading-graph-light'>Less than a month till we head over to...</span>
                                        </label>
                                    </div>
                                    <div className='graph-check-icon'>
                                        <img src={ThreeDot} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='graph-right-container'>
                        <LineChart />
                    </div>
                </div> */}
                {/* end the graph container */}
            </div>
        </>
    )
}

export default Dashboard