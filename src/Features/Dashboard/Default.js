import React from 'react';
import {Row, Col, Tabs, Tab, Table, Form} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Aux from "../../hoc/_Aux";
import './../../assets/scss/manage/style.scss';
import Card from "../../App/components/MainCard";
import Select from 'react-select';

export const colourOptions = [
    { value: 'email address', label: 'BRANCH', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

const data = [
    {
        name: '2008', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 35,
    },
    {
        name: '2009', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 60,
    },
    {
        name: '2010', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 55,
    },
    {
        name: '2011', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 85,
    },
    {
        name: '2012', 'Bar 1': 100, 'Bar 2': 90, 'Bar 3': 40,
    }
];

class IvirTable extends React.Component {
    render() {
        return (
            <Aux>
                <div>
                        <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                            <Tab eventKey="home" title="MASTER DASHBOARD">
                                <div className="flex-row mt-3 ml-3">
                                    <Select
                                        className="basic-single w-25"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="color"
                                        options={colourOptions}
                                    />
                                    <Select
                                        className="basic-single w-25 ml-2"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="color"
                                        options={colourOptions}
                                    />
                                </div>
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>LEAD NAME</th>
                                            <th width={'10%'}>LEAD NUMBER</th>
                                            <th width={'10%'}>CALL DURATION</th>
                                            <th width={'10%'}>LEAD STATUS</th>
                                            <th width={'10%'}>CALL QUEUE</th>
                                            <th width={'10%'}>AGENT/USER</th>
                                            <th width={'10%'}>COMPANY NUMBER</th>
                                            <th width={'15%'}>LEAD SOURCE CAMPAIGN</th>
                                            <th width={'15%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>Arindam De</td>
                                                <td>111-222-3333</td>
                                                <td>1Min:10Sec</td>
                                                <td>Webhook</td>
                                                <td>Inbound IVR</td>
                                                <td>Ryan Meier</td>
                                                <td>123 456 789</td>
                                                <td>acell leads-refinance</td>
                                                <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>END CALL</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">LISTEN</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">WHISPER</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">BARGE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">CHAT</h6>
                                                    </Col>
                                                    
                                                </Row>
                                                
                                            </td>
                                            </tr>
                                    
                                        </tbody>
                                    </Table>
                                    <div className="mt-3">
                                        <button className="btn_large_black pt-5 pb-5 pl-3 pr-3">TOTAL LEADS</button>
                                        <button className="btn_large_black pt-5 pb-5 pl-2 pr-2 ml-2">LEADS CALLED</button>
                                        <button className="btn_large_black pt-5 pb-5 pl-3 pr-3 ml-2">TOTAL CALLS</button>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="performance" title="PERFORMENCE DASHBOARD">
                                <Row className="ml-3">
                                    <Col sm={12} md={12} lg={4}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </Row>
                                    </Col>
                                    <Col sm={12} md={12} lg={5}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <button className="btn_black_round pl-3 pr-3 ml-2">FILTER</button>
                                            <button className="btn_black_round pl-3 pr-3">SAVE FILTER</button>
                                        </Row>
                                        
                                    </Col>
                                    
                                </Row>
                                <div className="flex-row ml-3 mt-3">
                                    <input type="checkbox" />
                                    <label className="ml-2 pt-2">ONLY SHOW LEADS CREATED IN SELECTED TIME-FRAME</label>
                                </div>
                                <Row className="ml-3 mt-1">
                                    <Col sm={6} md={6} lg={6}>
                                        <Row>
                                            <input type="checkbox" />
                                            <label className="ml-2 pt-2">ONLY SHOW LAST STATUS</label>
                                        </Row>
                                    </Col>
                                    <Col sm={6} md={6} lg={6} className="float-right">
                                        <button className="btn_black_round mr-3 pt-1 pb-1 pl-3 pr-3 float-right">EXPORT</button>
                                    </Col>
                                </Row>
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>LEAD SOURCE</th>
                                            <th width={'10%'}>TOTAL LEAD COUNT</th>
                                            <th width={'10%'}>AVG CPST/LEAD</th>
                                            <th width={'10%'}>TOTAL APPLICATION</th>
                                            <th width={'10%'}>TOTAL SALES</th>
                                            <th width={'10%'}>QUOTED-DEAD</th>
                                            <th width={'10%'}>BAD LEADS/RETURNS</th>
                                            <th width={'10%'}>TOTAL COST IN\ TIME FRAME</th>
                                            <th width={'10%'}>COST/APPLICATION</th>
                                            <th width={'10%'}>COST/SALES</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>Lead Source</td>
                                            <td>250</td>
                                            <td>
                                                <Form.Control type="text" className="w-75" placeholder="28" />
                                            </td>
                                            <td>28</td>
                                            <td>5</td>
                                            <td>35</td>
                                            <td>133</td>
                                            <td>$1254545</td>
                                            <td>$34435</td>
                                            <td>$3434</td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    
                                </div>
                            </Tab>
                            <Tab eventKey="inbound" title="INBOUND IVR DASHBOARD">
                                <Row className="ml-3">
                                    <Col sm={12} md={12} lg={4}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </Row>
                                    </Col>
                                    <Col sm={12} md={12} lg={5}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <button className="btn_black_round pl-3 pr-3 ml-2">FILTER</button>
                                            <button className="btn_black_round pl-3 pr-3">SAVE FILTER</button>
                                        </Row>
                                        
                                    </Col>
                                    
                                </Row>
                                <div className="mt-3">
                                    <Row>
                                        <Col lg={8}>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                    <defs>
                                                        <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#1de9b6" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#899FD4" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#A389D4" stopOpacity={1}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="Bar 1" fillOpacity={1} fill="url(#colorBar1)" />
                                                    <Bar dataKey="Bar 2" fillOpacity={1} fill="url(#colorBar2)" />
                                                    <Bar dataKey="Bar 3" fill="#04a9f5" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </Col>
                                    </Row>
                                    
                                </div>
                                <div className="mt-2 ml-3">
                                    <button className="btn_black_round pt-1 pb-1 pl-3 pr-3 ml-2">INCOMING/ACTIVE</button>
                                    <button className="btn_miss pt-1 pb-1 pl-3 pr-3 ml-2">MISSED/ABANDONED</button>
                                </div>
                                <div className="mt-3">
                                    <label className="font_black ml-3">IN QUEUE</label>
                                </div>
                                <div className="ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>#</th>
                                            <th width={'10%'}>TIME IN QUEUE</th>
                                            <th width={'15%'}>ATTEMPING</th>
                                            <th width={'15%'}>RETRY</th>
                                            <th width={'10%'}>LEAD INFO</th>
                                            <th width={'40%'}></th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>123-456-789</td>
                                            <td>00:00:30 Sec</td>
                                            <td>ADI, RYAN, SHSHIKANT</td>
                                            <td>RYAN MEIER</td>
                                            <td>
                                                
                                            </td>
                                            <td></td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    
                                </div>
                                <div className="mt-3">
                                    <label className="font_black ml-3">ACTIVE CALLS</label>
                                </div>
                                <div className="ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>#</th>
                                            <th width={'10%'}>CALL DURATION</th>
                                            <th width={'10%'}>CONNECTED</th>
                                            <th width={'10%'}>LEAD INFO</th>
                                            <th width={'40%'}></th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>123-456-789</td>
                                            <td>00:00:30 Sec</td>
                                            <td>SHSHIKANT</td>
                                            <td>RYAN MEIER</td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>END CALL</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">LISTEN</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">WHISPER</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">BARGE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">CHAT</h6>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    
                                </div>
                                <Row>
                                    <Col lg={8}>
                                        <div className="mt-3">
                                            <label className="font_black ml-3">SNAPSHOT VIEW</label>
                                            <Select
                                                className="basic-single float-right w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </div>
                                        <div>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                    <defs>
                                                        <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#1de9b6" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#899FD4" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#A389D4" stopOpacity={1}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="Bar 1" fillOpacity={1} fill="url(#colorBar1)" />
                                                    <Bar dataKey="Bar 2" fillOpacity={1} fill="url(#colorBar2)" />
                                                    <Bar dataKey="Bar 3" fill="#04a9f5" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="predictive" title="PREDICTIVE DASHBOARD">
                                <Row className="ml-3">
                                    <Col sm={12} md={12} lg={4}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </Row>
                                    </Col>
                                    <Col sm={12} md={12} lg={5}>
                                        <Row className="mt-3">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single w-25 ml-2"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <button className="btn_black_round pl-3 pr-3 ml-2">FILTER</button>
                                            <button className="btn_black_round pl-3 pr-3">SAVE FILTER</button>
                                        </Row>
                                        
                                    </Col>
                                    
                                </Row>
                                <div className="mt-3">
                                    <Row>
                                        <Col lg={8}>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                    <defs>
                                                        <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#1de9b6" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#899FD4" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#A389D4" stopOpacity={1}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="Bar 1" fillOpacity={1} fill="url(#colorBar1)" />
                                                    <Bar dataKey="Bar 2" fillOpacity={1} fill="url(#colorBar2)" />
                                                    <Bar dataKey="Bar 3" fill="#04a9f5" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </Col>
                                    </Row>
                                    
                                </div>
                                <div className="mt-2 ml-3">
                                    <button className="btn_miss pt-1 pb-1 pl-3 pr-3 ml-2">INCOMING/ACTIVE</button>
                                    <button className="btn_black_round pt-1 pb-1 pl-3 pr-3 ml-2">MISSED/ABANDONED</button>
                                </div>
                                <div>
                                    <label className="font_black ml-3 mt-3">IN QUEUE</label>
                                </div>
                                <div className="ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>#</th>
                                            <th width={'10%'}>TIME IN QUEUE</th>
                                            <th width={'15%'}>ATTEMPING</th>
                                            <th width={'15%'}>RETRY</th>
                                            <th width={'10%'}>LEAD INFO</th>
                                            <th width={'40%'}></th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>123-456-789</td>
                                            <td>00:00:30 Sec</td>
                                            <td>ADI, RYAN, SHSHIKANT</td>
                                            <td>RYAN MEIER</td>
                                            <td>
                                                
                                            </td>
                                            <td></td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    
                                </div>
                                <div className="mt-3">
                                    <label className="font_black ml-3 mt-3">ACTIVE CALLS</label>
                                </div>
                                <div className="ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'10%'}>#</th>
                                            <th width={'10%'}>CALL DURATION</th>
                                            <th width={'10%'}>CONNECTED</th>
                                            <th width={'10%'}>LEAD INFO</th>
                                            <th width={'40%'}></th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>123-456-789</td>
                                            <td>00:00:30 Sec</td>
                                            <td>SHSHIKANT</td>
                                            <td>RYAN MEIER</td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>END CALL</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">LISTEN</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">WHISPER</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">BARGE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={2} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">CHAT</h6>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    
                                </div>
                                <Row>
                                    <Col lg={8}>
                                        <div className="mt-3">
                                            <label className="font_black ml-3">SNAPSHOT VIEW</label>
                                            <Select
                                                className="basic-single float-right w-25"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </div>
                                        <div>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                    <defs>
                                                        <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#1de9b6" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="1%" stopColor="#899FD4" stopOpacity={1}/>
                                                            <stop offset="99%" stopColor="#A389D4" stopOpacity={1}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="Bar 1" fillOpacity={1} fill="url(#colorBar1)" />
                                                    <Bar dataKey="Bar 2" fillOpacity={1} fill="url(#colorBar2)" />
                                                    <Bar dataKey="Bar 3" fill="#04a9f5" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="gamification" title="GAMIFICATION">
                                <Card title='GAMIFICATION' isOption>
                                    <Row className="ml-3">
                                        <Col sm={12} md={12} lg={4}>
                                            <Row className="mt-3">
                                                <label className="font_black pt-2">LEADER BOARD</label>
                                                <label className="pt-2">(SINCE MIDNIGHT)</label>
                                                <Select
                                                    className="basic-single w-25 ml-2"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                                
                                            </Row>
                                        </Col>
                                        <Col sm={12} md={12} lg={5}>
                                            <Row className="mt-3">
                                                <Select
                                                    className="basic-single w-25"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                                <Select
                                                    className="basic-single w-25 ml-2"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                                <button className="btn_black_round pl-3 pr-3 ml-2">FILTER</button>
                                                
                                            </Row>
                                            
                                        </Col>
                                        
                                    </Row>
                                    <Row className="mt-3 ml-3 pr-4">
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="gray_box mt-3">
                                                <div className="mt-5 text-center">
                                                    <label className="font_large">6H:45MIN:50 SEC</label><br/>
                                                    <label className="font_small text-center">TOTAL CALL DURATION</label>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <label className="font_large">AGENT NAME</label><br/>
                                                    <label className="gray_back_label text-center pl-3 pr-3">AGENT STATUS</label>
                                                </div>
                                                <Row className="mt-3">
                                                    <Col>
                                                        <label className="ml-3">TOTAL SALES</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col sm={9} md={8} lg={8}>
                                                        <label className="ml-3">TOTAL TRANSFERS</label>
                                                    </Col>
                                                    <Col sm={3} md={4} lg={4} className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">TOTAL CALLS</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">QUOTED/APPOINTMENT</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                            </div>
                                            
                                        </Col>
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="gray_box pl-2 mt-3">
                                                <div className="mt-5 text-center">
                                                    <label className="font_large">6H:45MIN:50 SEC</label><br/>
                                                    <label className="font_small text-center">TOTAL CALL DURATION</label>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <label className="font_large">AGENT NAME</label><br/>
                                                    <label className="gray_back_label text-center pl-3 pr-3">AGENT STATUS</label>
                                                </div>
                                                <Row className="mt-3">
                                                    <Col>
                                                        <label className="ml-3">TOTAL SALES</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col sm={9} md={8} lg={8}>
                                                        <label className="ml-3">TOTAL TRANSFERS</label>
                                                    </Col>
                                                    <Col sm={3} md={4} lg={4} className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">TOTAL CALLS</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">QUOTED/APPOINTMENT</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                            </div>
                                            
                                        </Col>
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="gray_box pl-2 mt-3">
                                                <div className="mt-5 text-center">
                                                    <label className="font_large">6H:45MIN:50 SEC</label><br/>
                                                    <label className="font_small text-center">TOTAL CALL DURATION</label>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <label className="font_large">AGENT NAME</label><br/>
                                                    <label className="gray_back_label text-center pl-3 pr-3">AGENT STATUS</label>
                                                </div>
                                                <Row className="mt-3">
                                                    <Col>
                                                        <label className="ml-3">TOTAL SALES</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col sm={9} md={8} lg={8}>
                                                        <label className="ml-3">TOTAL TRANSFERS</label>
                                                    </Col>
                                                    <Col sm={3} md={4} lg={4} className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">TOTAL CALLS</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">QUOTED/APPOINTMENT</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                            </div>
                                            
                                        </Col>
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="gray_box pl-2 mt-3">
                                                <div className="mt-5 text-center">
                                                    <label className="font_large">6H:45MIN:50 SEC</label><br/>
                                                    <label className="font_small text-center">TOTAL CALL DURATION</label>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <label className="font_large">AGENT NAME</label><br/>
                                                    <label className="gray_back_label text-center pl-3 pr-3">AGENT STATUS</label>
                                                </div>
                                                <Row className="mt-3">
                                                    <Col>
                                                        <label className="ml-3">TOTAL SALES</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col sm={9} md={8} lg={8}>
                                                        <label className="ml-3">TOTAL TRANSFERS</label>
                                                    </Col>
                                                    <Col sm={3} md={4} lg={4} className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">TOTAL CALLS</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row className="mt-1">
                                                    <Col>
                                                        <label className="ml-3">QUOTED/APPOINTMENT</label>
                                                    </Col>
                                                    <Col className="text-right pr-5">
                                                        <label>28</label>
                                                    </Col>
                                                    
                                                </Row>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </Card>
                                
                                
                            </Tab>
                            
                        </Tabs>

                    </div>
               
              
            </Aux>
        );
    }
}

export default IvirTable;