import React from 'react';
import {Row, Col, Modal, Table, Form} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Select from 'react-select';
import './../../assets/scss/manage/style.scss';
import add from './../../assets/images/add.png';

export const colourOptions = [
    { value: 'branch', label: 'BRANCH', color: '#00B8D9' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

export const colourOptions1 = [
    { value: 'teams', label: 'BRANCH 01', color: '#00B8D9' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
   
];

class StatusManage extends React.Component {
    state = {};
    render() {
        return (
            <Aux>
                <div>
                   <h5 className="branch_header ml-2">
                       STATUS MANAGEMENT
                   </h5>
                </div>
                <Row>
                    <Col sm={12} md={12} lg={9}>
                        <div className="flex-row mt-4">
                            <label className="ml-2 mt-1">WOULD YOU LIKE AGENTS TO BE ABEL TO SELECT THE SAME STATUS?</label>
                            <div className="btn_group ml-3">
                                <button className="btn_yes pt-1 pb-1 pl-1 pr-1">YES</button>
                                <button className="btn_no pt-1 pb-1 pl-1 pr-1">NO</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <label>SELECT BRANCH</label>
                        <Select
                            className="basic-single ml-2 w-75"
                            classNamePrefix="select"
                            defaultValue={colourOptions1[0]}
                            name="color"
                            options={colourOptions1}
                        />
                    </Col>
                    
                </Row>
                <div>
                    <label className="ml-3" style={{fontSize:'12px'}}>IF ENAMBLED 0 BECOME THE SAME STATUS HOT KEY</label>
                </div>
                {/* <button className="btn_agent ml-2"  onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>AGENT STATUS HIS TORY</button> */}
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'10%'}>STATUS NAME</th>
                            <th width={'10%'}>HOT KEY</th>
                            <th width={'10%'}>UNNASIGN</th>
                            <th width={'10%'}>SUSPEND DRIP</th>
                            <th width={'5%'}>DNC</th>
                            <th width={'5%'}>DNT</th>
                            <th width={'15%'}>WEBHOOK ACTIVE</th>
                            <th width={'10%'}>DISPLAY IN POP-UP</th>
                            <th width={'15%'}>EXPIRATION STATUS</th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>ARINDAM DE</td>
                            <td><span className="span_circle pl-2 pr-2 pt-1 pb-1">1</span></td>
                            <td>
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </td> 
                            
                            <td>
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </td> 
                            <td>
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </td> 
                            <td>
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </td> 
                            <td>
                                <Select
                                    className="basic-single ml-2 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </td>  
                            <td>
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </td> 
                            <td>
                                <input type="checkbox" />
                            </td>  
                           
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center" style={{alignItems:'center'}}>EDIT</h6>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">DEL</h6>
                                    </Col>
                                    
                                </Row>
                                
                            </td>
                        </tr>
                       
                        </tbody>
                    </Table>
                    
                </div>
                <div className="mt-3 text-center">
                    <img width={'45px'} src={add}  onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}></img>
                    <h4 className="mt-2" >ADD STATUS</h4>
                </div>
                <div>
                    <Modal size={"md"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Body>
                            <div className="text-center">
                                <label className="font_large">EDIT STATUS</label>
                            </div>
                            <div className="pl-4">
                                <label>NAME YOUR STATUS</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="STATUS X" />
                            </div>
                            <div className="mt-2 pl-4">
                                <div>
                                    <label>HIERARCHY</label>
                                    <label className="ml-3 font_small">CHOOSE TEAMS WHO HAVE PERMISSION TO USE THIS STATUS</label>
                                </div>
                                <div className="flex-row">
                                    <Form.Control type="text" className="w-75" placeholder="CHOSE TEAMS" />
                                    <img width={'35px'} className="ml-2" src={add}></img>
                                </div>
                            </div>
                            <div className="ml-4 mt-2">
                                <label className="font-small">CHOSEN TEAMS</label>
                                <button className="btn_round ml-3">TEAM X</button>
                                <button className="btn_round ml-3">TEAM Y</button>
                            </div>
                            <div className="mt-4 ml-4">
                               <label>UNASSIGN THE LEAD FROM CALLER WHEN STATUS SELECTED?</label> 
                            </div>
                            <div className="ml-4">
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <div className="ml-4 mt-4">
                                <label>DISPLAY IN POP UP WINDOW?</label>
                                <label className="font-small">IF NO, CAN ONLY BE SELECTED IN LEAD DETAILS</label>
                            </div>
                            <div className="ml-4">
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <div className="gray_back mt-2 ml-4 w-75 pb-4">
                                <label className="font-black mt-1 ml-2">SELECT YOUR HOT KEY</label><br></br>
                                <Form.Control type="text" className="w-75 mt-1 ml-2" placeholder="TYPE YOUR HOT KEY" />
                            </div>
                            <div className="pl-4 mt-4">
                                <label>SEND EMAIL NOTIFICATION WHEN STATUS IS SELECTED?</label>
                                <div className="flex-row">
                                    <Form.Control type="text" className="w-75" placeholder="TYPE EMAIL" />
                                    <img width={'35px'} className="ml-2" src={add}></img>
                                </div>
                                
                            </div>
                            <div className="ml-4 mt-2">
                                <label className="font-small">CHOSEN  EMAILS</label>
                                <button className="btn_round ml-3">SS@GMAIL.COM</button>
                                <button className="btn_round ml-3">SS@GMAIL.COM</button>
                            </div>
                            <div className="mt-4 ml-4">
                                <label>SUSPEND DRIP DIAL WHEN THIS STATUS IS SELECTED?</label>
                                <label className="font_small">TYPICALLY THIS IS DONE WHEN YOU CONTACT THE CLIENT</label>
                            </div>
                            <div className="ml-4">
                                <div className="btn_group ml-3">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <Row className="ml-3">
                                <Col lg={4}>
                                    <label className="font_small">DO NOT CALL (DNC)</label>
                                    <div className="btn_group ml-3 mt-2">
                                        <button className="btn_yes pl-1 pr-1">YES</button>
                                        <button className="btn_no pl-1 pr-1">NO</button>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <label className="font_small">DO NOT TEXT? (DNC)</label>
                                    <div className="btn_group ml-3 mt-2">
                                        <button className="btn_yes pl-1 pr-1">YES</button>
                                        <button className="btn_no pl-1 pr-1">NO</button>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <label className="font_small">DO NOT EMAIL?</label>
                                    <div className="btn_group ml-3 mt-2">
                                        <button className="btn_yes pl-1 pr-1">YES</button>
                                        <button className="btn_no pl-1 pr-1">NO</button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="ml-4">
                                <label>TRIGGER A WEBHOOK WHEN STATUS IS SELECTED?</label>
                                <Form.Control type="text" className="mt-1 w-75" placeholder="NOT ACTIVE" />
                            </div>
                            <div className="ml-4">
                                <label className="mt-1">STATUS ORDER</label><br></br>
                                <Form.Control type="text" className="w-75 mt-1" placeholder="STATUS" />
                                <label className="font_small">SELECT ALL OTHER STATUSES THAT ARE ONLY AVAILABLE/SEEN WHEN THIS STATUS IS IN EFFECT</label>
                            </div>

                            <Row className="mt-2">
                                <Col className="text-center pl-4 pr-4">
                                    <div className="w-100" style={{border:'1px solid gray', height:'1px'}}>
                                    </div>
                                </Col>
                               
                            </Row>
                            
                            <div className="mt-3 ml-4">
                                <label className="">STATUS EXPIRATION</label>
                                <label className="font_small">SETUP AUTOMATIC STATUS EXPIRATION AFTER A CERTAIN PERIOD OF TIME</label>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="ml-4 mt-2">
                                <label>RESUME DRIP DIAL FROM WHERE IT LEFT OFF?</label>
                                <div className="btn_group ml-3 mt-2">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <div className="ml-4 mt-2">
                                <label>UNASSIGN LEAD FROM CURRENT LEAD OWNER?</label>
                                <div className="btn_group ml-3 mt-2">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <div className="ml-4 mt-2">
                                <label>ADD LEAD TO DO NOT CALL LIST?</label>
                                <div className="btn_group ml-3 mt-2">
                                    <button className="btn_yes pl-1 pr-1">YES</button>
                                    <button className="btn_no pl-1 pr-1">NO</button>
                                </div>
                            </div>
                            <div className="ml-4 mt-2">
                                <label>UPDATE/CHANGE LEAD TO A NEW STATUS?</label><br></br>
                                <Select
                                    className="basic-single mt-1 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </div>
                            <div className="mt-3 text-center">
                                <button className="btn_cancel p-2 text-white" onClick={() => this.setState({ isVarying: false })}>CANCEL</button>
                                <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                            </div>
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </Aux>
        );
    }
}

export default StatusManage;