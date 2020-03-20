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

class WebhookManage extends React.Component {
    state = {};
    render() {
        return (
            <Aux>
                <div>
                   <h5 className="branch_header ml-2">
                       WEBHOOK MANAGEMENT
                   </h5>
                </div>
                
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'15%'}>CREATION DATE</th>
                            <th width={'15%'}>WEBHOOK NAME</th>
                            <th width={'15%'}>WEBHOOK POSTING URL</th>
                            <th width={'40%'}></th>
                            <th width={'15%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>26 APRIL 2019</td>
                            <td>WEB HOOK NAME</td>
                            <td>URL GOES HERE</td> 
                            <td></td>  
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={4} sm={4} md={4} lg={4} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center" style={{alignItems:'center'}}>DUPLICATE</h6>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">EDIT</h6>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} className="text-center">
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
                    <h4 className="mt-2" >WEBHOOK SETTINGS</h4>
                </div>
                <div>
                    <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Body>
                            <div className="text-center">
                                <label className="font_large">WEBHOOK SETTINGS</label>
                            </div>
                            <div className="pl-4 mt-2">
                                <label>NAME OF WEBHOOK</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="pl-4 mt-2">
                                <label>WEBHOOK TYPE</label>
                                <Select
                                    className="basic-single mt-1 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </div>
                            <div className="pl-4 mt-2">
                                <label>WEBHOOK URL</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="pl-4 mt-2">
                                <label>API KEY</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="mt-3 ml-4">
                                 <label>WEBHOOK BODY</label>
                            </div>
                            
                            <Row className="ml-4 mr-4">
                                
                                <Col sm={6} md={6} lg={3}>
                                    <label className="font_small">DESTINATION FIELD TYPE</label>
                                    <div className="flex-row mt-2">
                                        <label className="mt-2 mr-1">1</label>
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    
                                    <div className="flex-row mt-1">
                                        <label className="mt-2 mr-1">2</label>
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-1">
                                        <label className="mt-2 mr-1">3</label>
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <label className="font_small">DESTINATION</label>
                                    <div className="flex-row mt-2">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <label className="font_small">SOURCE FIELD TYPE</label>
                                    <div className="flex-row mt-2">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <label className="font_small">SOURCE</label>
                                    <div className="flex-row mt-2">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center mt-3">
                                <img width={'40px'} src={add} /><br/>
                                <label>ADD NEW ROW</label>
                            </div>
                            <div className="mt-2 ml-4">
                                <label>WEBHOOK FORMAT</label>
                                <Select
                                    className="basic-single w-75 mt-1"
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

export default WebhookManage;