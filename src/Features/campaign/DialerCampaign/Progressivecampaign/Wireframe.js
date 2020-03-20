import React, {Component} from 'react';
import {Row,
    Col,
    Modal,
    Button,
    ButtonToolbar,
    Popover,
    OverlayTrigger} from 'react-bootstrap';

import Select from 'react-select';
import Aux from "../../../../hoc/_Aux";
import add from '../../../../assets/images/add.png';
import checked from './../../../../assets/images/checked.png';
import './../../../../assets/scss/campaign/style.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export const colourOptions = [
    { value: 'email address', label: 'Email Address', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

export const colourOptions1 = [
    { value: 'teams', label: 'Teams', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
   
];

class Wireframe extends Component {
    state = {
        
    };

    render() {
        return (
            <Aux>
                <div className="mt-5">
                    <Row>
                        <Col lg={6}>
                            <h4 className="wireframe_header ml-5 pt-3">WIREFRAME CAMPAIGN CREATION</h4>
                        </Col>
                        <Col lg={6} className="pl-5">
                            <Row  className="float-right">
                                <button className="btn_delay" onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>DELAY</button>
                                <button className="btn_status pt-3 pb-3 pl-4 pr-4 ml-2 mr-3">STATUS</button>
                            </Row>
                           
                        </Col>
                        
                    </Row>
                </div>
                <div className="main_frame mt-3 ml-4 pb-3">
                    <Row className="w-100">
                        <Col sm={3} md={3} lg={4}>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="frame-center mt-2 mb-2 pb-5">
                            <Row>
                                <Col sm={3} md={4} lg={4}></Col>
                                <Col sm={6} md={4} lg={3}>
                                    <div style={{marginTop:'8rem'}}>
                                        <span className="span_rect pt-2 pb-2 pl-4 pr-4 mb-3">STATUS</span>
                                    </div>
                                    <div style={{height:'5rem',width:'100%'}} className="ml-2 mt-2">
                                        <Col style={{borderRightStyle:'solid', borderRightColor:'black', borderRightWidth:'1px', height:'100%'}} sm={6} md={6} lg={6}></Col>
                                    </div>
                                    <Row>
                                        <div>
                                            <ButtonToolbar>
                                                {[ 'right'].map(placement => (
                                                    <OverlayTrigger
                                                    trigger="click"
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`DELAY BETWEEN CALLS`}</Popover.Title>
                                                        <Popover.Content>
                                                        <div className="p-2">
                                                                <Row className="mt-2 ml-1 w-100 flex-row">
                                                                    <Select
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={colourOptions[0]}
                                                                        name="color"
                                                                        options={colourOptions}
                                                                    />
                                                                    <Select
                                                                        className="basic-single ml-2"
                                                                        classNamePrefix="select"
                                                                        defaultValue={colourOptions[0]}
                                                                        name="color"
                                                                        options={colourOptions}
                                                                    />
                                                                    <img width={'8%'} className="ml-5" src={checked}></img>
                                                                    
                                                                    
                                                                </Row>
                                                                <div className="mt-2">
                                                                    <label className="ml-2">MAXIMUM NUMBER OF CALLS</label>
                                                                    <Select
                                                                        className="basic-single w-50"
                                                                        classNamePrefix="select"
                                                                        defaultValue={colourOptions[0]}
                                                                        name="color"
                                                                        options={colourOptions}
                                                                    />
                                                                </div>
                                                                
                                                            </div>
                                                        </Popover.Content>
                                                        </Popover>
                                                    }
                                                    >
                                                    <Button className="btn_circle_delay pl-2 pr-3 text center" style={{marginLeft:'30px'}} variant="light">DELAY<br></br>7DAYS<br></br>7HOURS</Button>
                                                    </OverlayTrigger>
                                                ))}
                                            </ButtonToolbar>
                                        </div>
                                    </Row>
                                
                                </Col>
                                <Col lg={5}></Col>
                            </Row>
                            
                        </Col>
                        
                    </Row>
                </div>
                <div className="text-right mt-2">
                    <button className="btn_cancel p-2 text-white">CANCEL</button>
                    <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                </div>
                <div>
                    <Row>
                        <Col sm={12}>
                            <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                                <Modal.Body>
                                    <div className="text-center">
                                        <h3>PROGRESSIVE STATUS</h3>
                                    </div>
                                    <div className="flex-row mt-5">
                                        <label className="ml-3 pt-2">LEAD STATUS</label>
                                        <Select
                                            className="basic-single w-50 ml-5"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                        <img className="ml-2" width={'5%'} src={add}></img>
                                    </div>
                                    <div className="flex-row mt-3">
                                        <label className="ml-3 pt-2">STATE / PROVINCE </label>
                                        <Select
                                            className="basic-single w-50 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-3">
                                        <label className="ml-3 pt-2">COURENT OWNER </label>
                                        <Select
                                            className="basic-single w-25 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                        <Select
                                            className="basic-single w-25 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-3">
                                        <label className="ml-3 pt-2">OWNER LEAD FILTER</label>
                                        <div className="btn_group pl-3">
                                            <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                            <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="ml-3" style={{fontSize:'12px'}}>THIS FILTER WILL ENSURE THAT LEAD IS CALLED ONLY BY THE LEAD OWER</label><br></br>
                                        <label className="ml-3">CAMPAIGN TIME</label>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col sm={12} md={12} lg={6} className="mt-2">
                                                <Row className="flex-row ml-2">
                                                    <Select
                                                        className="basic-single w-25 ml-3"
                                                        classNamePrefix="select"
                                                        defaultValue={colourOptions1[0]}
                                                        name="color"
                                                        options={colourOptions1}
                                                    />
                                                    <Select
                                                        className="basic-single w-25 ml-3"
                                                        classNamePrefix="select"
                                                        defaultValue={colourOptions1[0]}
                                                        name="color"
                                                        options={colourOptions1}
                                                    />
                                                    <img className="ml-2" width={'9%'} src={add}></img>
                                                    <button className="btn_or ml-2">OR</button>
                                                
                                                </Row>
                                            </Col>
                                            <Col sm={12} md={12} lg={6} className="mt-2">
                                                <Row>
                                                    <Col className="pl-5" sm={7} md={7} lg={7}>
                                                        <span style={{fontSize:'11px'}}>CALL DURING BUSINESS HOUR <br></br>CALL DURING BUSINESS HOURS</span>
                                                    </Col>
                                                    <Col sm={5} md={5} lg={5}>
                                                        <div className="btn_group">
                                                            <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                            <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                
                                            </Col>

                                        </Row>
                                    </div>
                                    <div><button className="btn_leadx ml-3">MONDAY 10:30 AM</button></div>
                                    <div><label className="ml-3 mt-2">SELET TAGS</label></div>
                                    <Row>
                                        <Col lg={9}>
                                            <div className="flex-row">
                                                <Select
                                                    className="basic-single w-50 ml-3"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions1[0]}
                                                    name="color"
                                                    options={colourOptions1}
                                                />
                                                <img className="ml-2" width={'5%'} src={add}></img>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    <div className="flex-row mt-2">
                                        <label className="pt-1 ml-3">EXCLUDED LEAD SOURCE</label>
                                        <button className="btn_tag01 ml-3">TAG 01</button>
                                        <button className="btn_tag02 ml-2">TAG 02</button>
                                    </div>
                                    <Row className="mt-2 ml-3">
                                        <Col lg={9}>
                                            <Row>
                                                <label>COMPLETED DRIP DIAL</label>
                                                <button className="btn_leadx ml-2">NOT CHOSEN</button>
                                                <button className="btn_leadx ml-2">ON</button>
                                                <button className="btn_off_black ml-2">OFF</button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <div className="pl-3">
                                        <label>LEAD SOURCE CAMPAIGNS</label>
                                        <Row>
                                            <Col lg={8}>
                                                <div className="flex-row">
                                                    <input placeholder="LEAD SOURCE" type="text" className="form-control" value=""/>
                                                     <img className="ml-2" width={'10%'} src={add}></img>

                                                </div>
                                            </Col>
                                             
                                        </Row>
                                    </div>
                                    <div className="flex-row mt-2 pl-3">
                                        <label>EXCLUDEED LEAD SOURCE</label>
                                        <button className="btn_leadx ml-1">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                    </div>  
                                    <Row className="pl-3">
                                        <Col sm={12} md={12} lg={7} className="mt-2" style={{borderRight:'solid'}}>
                                            <div className="flex-row">
                                                <label className="pr-1">CALL BASED ON LEAD AGE</label>
                                                <input type="text" placeholder="" value=""/>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={12} lg={5} className="mt-2">
                                            <div className="flex-row">
                                                <label>LAST STATUS</label>
                                                <input className="w-50 ml-2" type="text" placeholder="" value=""/>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    <div className="flex-row mt-2 ml-3">
                                        <label className="pt-2">CALL ELIGIBILITY</label>
                                        <Select
                                            className="basic-single w-25 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                        <Select
                                            className="basic-single w-25 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                        <Select
                                            className="basic-single w-25 ml-3 select_black"
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
                        
                        </Col>
                    </Row>
                </div>
            </Aux>
            
        );
    }
}

export default Wireframe;