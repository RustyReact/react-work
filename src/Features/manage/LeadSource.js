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

class LeadSource extends React.Component {
    state = {};

    next () {
        let first = document.getElementsByClassName("first")[0];
        first.style.display = "none";
        let second = document.getElementsByClassName("second")[0];
        second.style.display = "block";
    }

    second () {
        let first = document.getElementsByClassName("first")[0];
        first.style.display = "none";
        let second = document.getElementsByClassName("second")[0];
        second.style.display = "none";
        let third = document.getElementsByClassName("third")[0];
        third.style.display = "block";
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <div className="pl-4">
                            <h5 className="branch_header mt-3">
                                LEAD SOURCE
                            </h5>
                        </div>
                    </Col>
                    <Col>
                         <Select
                            className="basic-single w-50 float-right mr-2"
                            classNamePrefix="select"
                            defaultValue={colourOptions1[0]}
                            name="color"
                            options={colourOptions1}
                        />
                    </Col>
                   
                </Row>
                
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'15%'}>LEAD SOURCE/CAMPAIGN</th>
                            <th width={'30%'}>URL</th>
                            <th width={'40%'}></th>
                            <th width={'15%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>26 APRIL 2019</td>
                            <td>https://ultconnect.com/vendorname/randomVariable</td>
                            <td>URL GOES HERE</td> 
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={4} sm={4} md={4} lg={4} className="text-center">
                                        <img width={'35px'} src={add}></img>
                                        
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">MAP</h6>
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
                    <h4 className="mt-2" >ADD LEAD SOURCE</h4>
                </div>
                <div>
                    <Modal size={"md"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Header closeButton style={{background:'black'}}>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="first">
                                <div className="text-center">
                                    <label className="font_large font_black">LEAD SOURCING</label>
                                </div>
                                <div className="pl-4 mt-4">
                                    <label className="font_black">LEAD SOURCE NAME</label><br></br>
                                    <Form.Control type="text" className="w-75" placeholder="" />
                                </div>
                                <Row>
                                    <Col sm={8} md={8} lg={5} className="pl-5">
                                        <label className="font_black mt-3">TEAMS ASSOCIATED</label>
                                        <label className="font_small">IF NONE, ALL TEAMS WILL BE SELECTED</label>
                                        <Select
                                            className="basic-single w-75"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </Col>
                                    <Col sm={4} md={4} lg={1} className="pt-5">
                                        <span className="font_black font_large">OR</span>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} className="pr-2 pl-5">
                                        <label className="font_black mt-3">TEAMS ASSOCIATED</label><br/>
                                        <label className="font_small">IF NONE, ALL TEAMS WILL BE SELECTED</label>
                                        <Select
                                            className="basic-single w-75"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </Col>
                                </Row>
                                <Row className="pl-4 mt-3">
                                    <Col lg={8}>
                                        <label className="font_black pl-3">WOULD YOU LIKE TO ADD CAMPAIGNS TO THIS LEAD SOURCE?</label>
                                        <label className="pl-3">USE THIS IF YOU PURCHASE DIFFERENT TYPES OF LEADS IE HOMEOWNERS INSURANCE VS AUTO INSURANCE</label>
                                    </Col>
                                    <Col lg={4} className="pt-3">
                                        <div className="btn_group ml-3">
                                            <button className="btn_yes pl-1 pr-1">YES</button>
                                            <button className="btn_no pl-1 pr-1">NO</button>
                                        </div>
                                    </Col>
                                    
                                    
                                </Row>

                                <div className="flex-row gray_back_label ml-4 mr-5 pt-2 pb-2 mt-2">
                                    <Form.Control type="text" className="w-75 ml-3" placeholder="CAMPAIGN NAME" />
                                    <img className="ml-2" width={'35px'} src={add}></img>
                                </div>
                                
                                <div className="mt-3 text-center">
                                    <button className="btn_save p-2 text-white pl-5 pr-5" onClick={() => this.next()}>SAVE & CONTINUE</button>
                                    
                                </div>
                            </div>

                            <div className="second">
                                <div className="text-center">
                                    <label className="font_large font_black">STEP 02</label>
                                </div>
                                <div className="pl-4 mt-4">
                                    <label className="font_black">BELOW ARE YOUR URLS. IF YOU CREATED CAMPAIGNS MAKE SURE 
                                    TO PROVIDE THESE TO YOUR LEAD PROVIDE/LEAD SOURCE. IF YOU DID NOT CREATE A CAMPAIGN, 
                                    SIMPLY USE THE LEAD SOURCE URL</label><br></br>
                                
                                </div>
                                <div className="pl-4 mt-2">
                                    <label className="font_black">YOU WILL NEED TO HAVE 1 TEXT LEAD SENT TO EACH URL FOR MAPPING, 
                                    MAKE SURE THAT THE TEST LEAD IS SENT OVER WITH ALL FIELDS FILLED OUT (DO NOT SEND EMPTY DATA FIELDS). 
                                    ONCE A LEAD IS SENT RETURN BACK TO THE LEAD SOURCE HOME SCREEN AND SELECT "MAP" NEXT TO THE CAMPAIGN YOU'D LIKE TO MAP.</label>
                                </div>
                                
                                <div className="ml-4 mr-5 mt-2">
                                    <Form.Control type="text" className="w-100 ml-2" placeholder="https://ultconnect.com/vendorname/randomVariable" />
                                    <Form.Control type="text" className="w-100 ml-2 mt-2" placeholder="https://ultconnect.com/vendorname/campaignName/randomVariable" />
                                </div>
                                
                                <div className="mt-5 text-center">
                                    <button className="btn_save p-2 text-white pl-5 pr-5" onClick={() => this.second()}>FINISH</button>
                                    
                                </div>
                            </div>

                            <div className="third">
                                <Row className="text-center">
                                    <Col>
                                        <Select
                                            className="basic-single w-50 float-right"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </Col>
                                    <Col>
                                        <Select
                                            className="basic-single w-50 float-left"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </Col>
                                    
                                </Row>
                                <div className="text-center mt-2">
                                    <label className="font_large font_black">LEAD SOURCE MAPPING</label>
                                </div>
                                <Row className="mt-3">
                                    <Col lg={6} className="pl-4" style={{borderRight:'1px solid gray'}}>
                                        <label>LAST POSTED LEAD FIELDS</label>
                                        <div className="mt-3">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>FIRST NAME
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>LAST NAME
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>EMAIL ADDRESS
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>PHONE 01
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>PHONE 02
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>REFINANCE DURATION
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <label>
                                                <i className="fa fa-circle text-c-black f-10 m-r-15"/>CREDIT SCORE
                                            </label>
                                        </div>
                                        
                                    
                                    </Col>
                                    <Col lg={6} className="pl-4">
                                        <label>SELECT YOUR LABELS</label>
                                        <div className="mt-2">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <Select
                                                className="basic-single w-75"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions1[0]}
                                                name="color"
                                                options={colourOptions1}
                                            />
                                        </div>
                                        
                                    </Col>
                                </Row>
                                
                                <div className="mt-5 text-center">
                                    <button className="btn_save p-2 text-white pl-5 pr-5" onClick={() => this.setState({ isVarying: false })}>SAVE & CONTINUE</button>
                                    
                                </div>
                            </div>
                            
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </Aux>
        );
    }
}

export default LeadSource;