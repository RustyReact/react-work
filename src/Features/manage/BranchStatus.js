import React from 'react';
import {Row, Col, Modal, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Select from 'react-select';
import './../../assets/scss/manage/style.scss';
import Avatar1 from './../../assets/images/user/avatar-1.jpg';
import green_phone from './../../assets/images/green_phone.png';
import red_phone from './../../assets/images/red_phone.png';
import black_phone from './../../assets/images/black_phone.jpg';

export const colourOptions = [
    { value: 'branch', label: 'BRANCH', color: '#00B8D9' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

export const colourOptions1 = [
    { value: 'teams', label: 'TEAM', color: '#00B8D9' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
   
];

class BranchStatus extends React.Component {
    state = {};
    render() {
        return (
            <Aux>
                <div>
                   <h5 className="branch_header ml-2">
                       BRANCH STATUS
                   </h5>
                </div>
                <Row>
                    <Col sm={12} md={12} lg={5}>
                        <Row>
                            <Col lg={6}>
                                <label className="ml-2">SELECT BRANCH</label>
                                <Select
                                    className="basic-single ml-2 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions[0]}
                                    name="color"
                                    options={colourOptions}
                                />
                            </Col>
                            <Col lg={6}>
                                <label className="ml-2">SELECT TEAM</label>
                                <Select
                                    className="basic-single ml-2 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </Col>
                            
                        </Row>
                        
                    </Col>
                    <Col sm={12} md={12} lg={7}>
                        <Row className="mt-4 pl-4">
                            <div className="btn_group">
                                <button className="btn_yes pt-1 pb-1 pl-1 pr-1">29AGENTS</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">11BUSY</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">5ON PHONE</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">2OFFLINE</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">3RINGING</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">2BREAK</button>
                                <button className="btn_simple pt-1 pb-1 pl-1 pr-1">8WRAPUP</button>
                                <button className="btn_no pt-1 pb-1 pl-1 pr-1">2LUNCH</button>
                                
                            </div>
                            <button className="btn_agent ml-2"  onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>AGENT STATUS HIS TORY</button>
                        </Row>
                        
                    </Col>
                    
                </Row>
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'10%'}>AGENT NAME</th>
                            <th width={'10%'}>STATUS TIME</th>
                            <th width={'10%'}>AGENT STATUS</th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'5%'}></th>
                            <th width={'8%'}></th>
                            <th width={'15%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>ARINDAM DE</td>
                            <td>2HR:20MIN:15 SEC</td>
                            <td>BUSY</td>
                            
                            <td>
                                <span className="span_ivr mt-1 pl-1 pr-1 pt-1 pb-1">INBOUND IVR</span>
                                <div className="mt-3">
                                    <span className="text-center">5 CALLS</span>
                                </div>
                            </td>   
                            <td>
                                <label className="pl-1 pr-1 pt-1 pb-1">INBOUND IVR</label>
                                <div>
                                    <span>0</span>
                                </div>
                            </td>
                            <td>
                                <span className="span_ivr mt-1 pl-1 pr-1 pt-1 pb-1">INSTANT-Q</span>
                                <div className="mt-3">
                                    <span className="text-center">5 CALLS</span>
                                </div>
                            </td>
                            <td>
                                <label className="pl-1 pr-1 pt-1 pb-1">INBOUND IVR</label>
                                <div>
                                    <span className="text-center">0</span>
                                </div>
                            </td>  
                            <td>
                                <span className="span_ivr mt-1 pl-1 pr-1 pt-1 pb-1">DRIP DIAL</span>
                                <div className="mt-3">
                                    <span className="text-center">2</span>
                                </div>
                            </td> 
                            <td>
                                <label className="pl-1 pr-1 pt-1 pb-1">ACT-Q</label>
                                <div className="">
                                    <span className="text-center">2</span>
                                </div>
                            </td>  
                            <td>
                                <label className="pl-1 pr-1 pt-1 pb-1">DIAL-Q</label>
                                <div className="">
                                    <span className="text-center">2</span>
                                </div>
                            </td>
                            <td>
                                <label className="pt-1">PREDICTIVE DIALER</label>
                                <div>
                                    <label>2</label>
                                </div>
                            </td>
                            
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center" style={{alignItems:'center'}}>WHISPER</h6>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">BRIDGE</h6>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">LISTEN</h6>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">LOG OFF</h6>
                                    </Col>
                                </Row>
                                
                            </td>
                        </tr>
                       
                        </tbody>
                    </Table>
                    
                </div>
                <div>
                    <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Header  className="modal_header" style={{height:'100px'}}>
                            <Row className="w-100">
                                <Col sm={6} md={6} lg={6}>
                                    <label className="phone_num ml-3 mt-4">+91 123456789</label>
                                    <img width={'50px'} className="ml-3" src={black_phone}></img>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <div className="text-right mt-2">
                                        <img width={'55px'} src={green_phone}></img>
                                        <img width={'75px'} src={red_phone}></img>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="text-center">
                                <button className="btn_modal_black pt-1 pb-1 pl-2 pr-2">HOME</button>
                                <button className="btn_modal_black pt-1 pb-1 pl-2 pr-2">SCRIPT 01</button>
                                <button className="btn_modal_black pt-1 pb-1 pl-2 pr-2">SCRIPT 02</button>
                            </div>
                            <Row className="mt-3">
                                <Col sm={4} md={4} lg={2}>
                                    <img src={Avatar1} className="mt-4 img-responsive"></img>
                                </Col>
                                <Col sm={8} md={8} lg={5} className="pt-3">
                                    <h4 style={{color:'black'}}>ARINDAM DE</h4>
                                    <Row>
                                        <Col>
                                            <label>LEAD SOURCE</label>
                                            <label style={{color:'black'}}>3 Days ago</label>
                                        </Col>
                                        <Col>
                                            <label>LEAD OWNER</label>
                                            <label style={{color:'black'}}>Adi Leads</label>
                                        </Col>
                                        
                                    </Row>
                                </Col>
                                <Col sm={12} md={12} lg={5}>
                                    <Row className="mt-3">
                                        <Col lg={6} style={{borderRight:'1px solid gray'}} className="float-right">
                                            <label>CREATION DATE</label>
                                            <label style={{color:'black', fontSize:'12px'}}>10 JULY 2019</label>
                                        </Col>
                                        <Col lg={6}>
                                            <label>LAST MODIFIED</label>
                                            <label style={{color:'black', fontSize:'12px'}}>10 JULY 2019</label>
                                        </Col>
                                    </Row>
                                    <div>
                                        <label>LEAD SOURCE CAMPAIGN</label><br></br>
                                        <label style={{color:'black'}}>General Insurence</label>
                                    </div>
                                </Col>
                            </Row>
                            <div className="pt-4 pb-2 text-center">
                                <div className="btn_group">
                                    <button className="btn_yes pt-1 pb-1 pl-2 pr-2">INBOUND IVR</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">INSTANT</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">INSTANT-Q</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">INSTANT-EVE</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">DRIP DIAL</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">ACT-Q</button>
                                    <button className="btn_simple pt-1 pb-1 pl-2 pr-2">DIAL-Q</button>
                                    <button className="btn_no pt-1 pb-1 pl-1 pr-2">PREDICTIVE DIALER</button>
                                    
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <button className="btn_modal_black_detail pl-1 pr-1 pt-1 pb-1">PERSONAL DETAILS</button>
                                <button className="btn_modal_black_detail pt-1 pb-1 pl-1 pr-1 ml-1">COMPANY DETAILS</button>
                                <button className="btn_modal_black_detail pt-1 pb-1 pl-1 pr-1 ml-1">PERSONAL DETAILS</button>
                                <button className="btn_modal_black_detail pt-1 pb-1 pl-1 pr-1 ml-1">PERSONAL DETAILS</button>
                            </div>
                            <Row className="mt-3">
                                <Col lg={6}>
                                    <Row>
                                        <Col sm={6} md={6} lg={5}>
                                            <label className="modal_label mt-2">NAME</label><br></br>
                                            <label className="modal_label mt-2">EMAIL ADDRESS</label><br></br>
                                            <label className="modal_label mt-2">NAME</label><br></br>
                                            <label className="modal_label mt-2">EMAIL ADDRESS</label>
                                        </Col>
                                        <Col sm={6} md={6} lg={7}>
                                            <input className="input_text mt-2" type="text" placeholder="ARINDAM DE" />
                                            <input className="input_text mt-2" type="text" placeholder="CFO.PIXERWEB" />
                                            <input className="input_text mt-3" type="text" placeholder="ARINDAM DE" />
                                            <input className="input_text mt-3" type="text" placeholder="CFO.PIXERWEB" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6}>
                                    <Row>
                                        <Col>
                                            <label className="modal_label mt-2">PHONE NUMBER</label>
                                            <label className="modal_label mt-2">COMPANY NAME</label>
                                            <label className="modal_label mt-2">PHONE NUMBER</label>
                                            <label className="modal_label mt-2">COMPANY NAME</label>
                                        </Col>
                                        <Col>
                                            <input className="input_text mt-2" type="text" placeholder="23432423432" />
                                            <input className="input_text mt-2" type="text" placeholder="PIXER WORLD" />
                                            <input className="input_text mt-3" type="text" placeholder="43534545" />
                                            <input className="input_text mt-3" type="text" placeholder="PIXER WORLD" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="mt-3 text-center">
                                <button className="btn_modal_details pt-2 pb-2 pl-2 pr-2">CHECK FULL LEAD DETAILS</button>
                            </div>
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </Aux>
        );
    }
}

export default BranchStatus;