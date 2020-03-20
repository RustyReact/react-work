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

class ImportCsv extends React.Component {
    state = {};

    next () {
        alert("dsfds");
        // $(".first").hide();
        // $(".second").show();
    }
    render() {
        return (
            <Aux>
                <Row>
                    <h5 className="branch_header mt-3 pl-4">
                        LEAD SOURCE
                    </h5>
                    
                </Row>
                
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'10%'}>CREATION DATE</th>
                            <th width={'10%'}>LIST NAME</th>
                            <th width={'10%'}>VENDOR ASSIGNED</th>
                            <th width={'10%'}>DESCRIPTION</th>
                            <th width={'50%'}></th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>26 APRIL 2019</td>
                            <td>ARINDAM DE</td>
                            <td>VENDOR X</td>
                            <td>DESCRIPTION X</td>
                            <td></td> 
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={12} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center">RE-MAP</h6>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} className="text-center">
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
                    <h4 className="mt-2" >UPLOAD CSV LEADS</h4>
                </div>
                <div>
                    <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Body>
                            <div className="text-center">
                                <label className="font_large font_black">IMPORT STEP ONE</label>
                            </div>
                            <div className="pl-4 mt-4">
                                <label className="font_black">LEAD LIST NAME</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="pl-4 mt-4 pr-5">
                                <label className="font_black">DESCRIPTION</label><br></br>
                                <Form.Control as="textarea" className="w-100" rows="3" placeholder="DESCRIPTION"/>
                                
                            </div>
                            <div className="mt-4 ml-4">
                                <label>CHOOSE DATE AND TIME FORMATTING FOR CREATION DATE</label>
                            </div>
                            <Row className="ml-4 pr-5">
                                <Col sm={6} md={6} lg={3}>
                                    <Select
                                        className="basic-single mt-2 w-100"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions1[0]}
                                        name="color"
                                        options={colourOptions1}
                                    />
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <Select
                                        className="basic-single mt-2 w-100"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions1[0]}
                                        name="color"
                                        options={colourOptions1}
                                    />
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <Select
                                        className="basic-single mt-2 w-100"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions1[0]}
                                        name="color"
                                        options={colourOptions1}
                                    />
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <Select
                                        className="basic-single mt-2 w-100"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions1[0]}
                                        name="color"
                                        options={colourOptions1}
                                    />
                                </Col>
                            </Row>
                            <Row className="pl-4 mt-3">
                                <Col sm={6} md={6} lg={8}>
                                    <label className="font_black pl-3 pt-3">TREAT LIST AS INSTANT-Q?</label>
                                </Col>
                                <Col sm={6} md={6}  lg={4} className="pt-3">
                                    <div className="btn_group ml-3">
                                        <button className="btn_yes pl-1 pr-1">YES</button>
                                        <button className="btn_no pl-1 pr-1">NO</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="pl-4 mt-3">
                                <Col sm={6} md={6} lg={8}>
                                    <label className="font_black pl-3 pt-3">REMOVE DUPLICATES?</label>
                                </Col>
                                <Col sm={6} md={6} lg={4} className="pt-3">
                                    <div className="btn_group ml-3">
                                        <button className="btn_yes pl-1 pr-1">YES</button>
                                        <button className="btn_no pl-1 pr-1">NO</button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="pl-4 mt-5">
                                <label>
                                    IF YOU WILL NOT BE IMPORTING MULTIPLE LEAD SOURCE YOU MUST SELECT A LEAD SOURCE ON THIS SCREEN (YOU CAN CREATE A 
                                    LIST LEAD SOURCE NAME UNDER THE "LEAD SOURCE" MENU).
                                </label>
                            </div>
                            <Row className="mt-2 pl-5 pr-5">
                                <Select
                                    className="basic-single w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </Row>
                            
                            <div className="mt-3 text-center">
                                <button className="btn_save p-2 text-white pl-5 pr-5" onClick={() => this.next()}>UPLOAD CSV FILE</button>
                                
                            </div>
                        
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </Aux>
        );
    }
}

export default ImportCsv;