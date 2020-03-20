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
import checked from './../../../../assets/images/checked.png';
import add from '../../../../assets/images/add.png';
import './../../../../assets/scss/campaign/style.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export const colourOptions = [
    { value: 'email address', label: 'NUMBER', color: '#00B8D9' },
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
                                    <div style={{marginTop:'10rem'}}>
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
                                                        <Popover.Title as="h3">{`DELAY SETTINGS`}</Popover.Title>
                                                        <Popover.Content>
                                                        <div className="p-2">
                                                                <div>
                                                                    <Select
                                                                        className="basic-single w-50"
                                                                        classNamePrefix="select"
                                                                        defaultValue={colourOptions[0]}
                                                                        name="color"
                                                                        options={colourOptions}
                                                                    />
                                                                </div>
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
                                                                    <Select
                                                                        className="basic-single w-75"
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
                                                    <Button className="btn_circle pl-3 pr-3 ml-4" variant="light">DELAY<br></br>7 DAYS<br></br>7HOURS</Button>
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
                                        <h3>STATUS BLAST</h3>
                                    </div>
                                    <div>
                                        <Row className="mt-5">
                                            <Col sm={6} md={6} lg={6}>
                                                <label className="ml-3">SEND TEXT FROM CURRENT LEAD OWNER NUMBER?</label>
                                            </Col>
                                            <Col sm={6} md={6} lg={6} className="text-right">
                                                <div className="btn_group">
                                                    <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                    <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                                </div>
                                                
                                            </Col>
                                            
                                        </Row>
                                        
                                    </div>
                                    <div>
                                        <Row className="choose_back mt-2 p-2 ml-2 mr-2">
                                            <Col lg={6}>
                                                <label className="text-white pt-2 pl-2">CHOOSE YOUR NUMBER FOR THIS CAMPAIGN</label>
                                            </Col>
                                            <Col lg={6}>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                            </Col>
                                        </Row>
                                        
                                    </div>    
                                    <div>
                                        <Row className="choose_back mt-2 p-2 ml-2 mr-2">
                                            <Col lg={7}>
                                                <label className="text-white pt-2 pl-2">EXCLUDE OUT GOING TEXT FORM CERTAIN TEAMS?</label>
                                                <Row>
                                                    <label className="text-white pl-3 ml-2">EXCLUDE TEAMS</label>
                                                    <button className="btn_temx ml-2">TEM X</button>
                                                </Row>
                                                
                                            </Col>
                                            <Col lg={5}>
                                                <Row className="pl-4 pt-3">
                                                    <Select
                                                        className="basic-single w-75"
                                                        classNamePrefix="select"
                                                        defaultValue={colourOptions1[0]}
                                                        name="color"
                                                        options={colourOptions1}
                                                    />
                                                    <img className="ml-3" width={'10%'} src={add}></img>
                                                </Row>
                                                
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 ml-2 pl-3">
                                            <Col lg={8}>
                                                <label>EXCLUDE CERTAIN LEAD SOURCES</label>
                                                <div className="flex-row">
                                                     <input placeholder="LEAD SOURCE" type="text" className="form-control" value=""/>
                                                     <img className="ml-2" width={'10%'} src={add}></img>
                                                </div>
                                                
                                            </Col>
                                            
                                        </Row>
                                    </div>  
                                    <div className="flex-row mt-2 pl-5">
                                        <label>EXCLUDEED LEAD SOURCE</label>
                                        <button className="btn_leadx ml-1">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                        <button className="btn_leadx ml-2">LEAD SOURCE X</button>
                                    </div>  
                                    <Row className="mt-2 pl-5">
                                        <Col sm={12} md={12} lg={8} className="">
                                            <div className="flex-row">
                                                <label className="pr-1">SEND TEXT BASED ON LEAD AGE</label>
                                                <input type="text" placeholder="" value=""/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="pl-5">
                                        <label>SELET TAGS</label>
                                        <Row>
                                            <Col lg={8}>
                                                <div className="flex-row">
                                                    <input placeholder="TAG" type="text" className="form-control" value=""/>
                                                     <img className="ml-2" width={'10%'} src={add}></img>

                                                </div>
                                            </Col>
                                             
                                        </Row>
                                    </div>
                                    <Row className="mt-3 pl-5">
                                        <Col lg={6}>
                                            <div className="flex-row">
                                                <label className="pt-1">EXCLUDED LEAD SOURCE</label>
                                                <button className="btn_tag01 ml-3">TAG 01</button>
                                                <button className="btn_tag02 ml-2">TAG 02</button>
                                            </div>
                                        </Col>
                                            
                                    </Row>
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