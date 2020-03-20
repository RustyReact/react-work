import React, {Component} from 'react';
import {Row, Col, Modal, Form} from 'react-bootstrap';

import Select from 'react-select';
import Slider  from 'rc-slider';
import Tooltip from 'rc-tooltip';
import Aux from "./../../../../../hoc/_Aux";
import add from './../../../../../assets/images/add.png';
import record from './../../../../../assets/images/record.png';

import wireframe from './../../../../../assets/images/wireframe/Inbound IVR Creation/Single IVR/Single Wireframe.png';
import './../../../../../assets/scss/campaign/style.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

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

export const colourOptions2 = [
    { value: 'voice', label: 'VOICEEMAIL', color: 'white' },
    { value: 'hangup', label: 'HANGUP', color: '#0052CC', isFixed: true },
    { value: 'team', label: 'TRANSFER TO TEAM(S)', color: '#5243AA' },
    { value: 't_agent', label: 'TRANSFER TO AGENT(S)', color: '#FF5630', isFixed: true },
    { value: 't_num', label: 'TRANSFER TO NUMBER(DROPDOWN)', color: '#FF5630', isFixed: true },
    { value: 'external', label: 'TRANSFER TO EXTERNAL NUMBER(TYPE IN)', color: '#FF5630', isFixed: true },
    { value: 'queue', label: 'QUEUE CALL', color: 'white', isFixed: true },
   
];

class Wireframe extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            select: ''
        };

        this.djsConfig = {
            addRemoveLinks: false,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false,
            uploadprogress: 100
        };
    
        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };
    }
    
    handleFileAdded(file) {
        console.log(file);
    }
    
    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this)
        };
        return (
            <Aux>
                <div className="mt-5">
                    <Row>
                        <Col lg={6}>
                            <h4 className="wireframe_header ml-5 pt-3">WIREFRAME CAMPAIGN CERTAIN</h4>
                        </Col>
                        <Col lg={6}>
                            <Row  className="float-right">
                                <button className="btn_delay pt-2 pb-2 mt-3" onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>IVR SETTING</button>
                                <button className="btn_delay pt-2 pb-2 mt-3 ml-3">CAMPAIGN NAME & NUMBER</button>
                            </Row>
                           
                        </Col>
                        
                    </Row>
                </div>
                <div className="main_frame mt-3 ml-4 pb-3">
                    <Row className="w-100">
                        <Col sm={1} md={1} lg={2}>
                        </Col>
                        <Col sm={10} md={10} lg={8} className="mt-2 mb-2">
                            <div className="mt-4">
                                <img width={'100%'} src={wireframe}>
                                </img>
                            </div>

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
                                        <h3>SINGLR IVR SETTING</h3>
                                    </div>
                                    <div>
                                        <Row className="mt-3">
                                            <Col sm={12} md={5} lg={5}>
                                                <label className="ml-3">SELET YOUR NUMBER</label>
                                            </Col>
                                            <Col sm={12} md={7} lg={7} className="text-right">
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
                                        <Row className="mt-3">
                                            <Col sm={6} md={8} lg={7}>
                                                <label className="ml-3">WILL THIS BE THE PRIMARY NUMBER FOR YOUR BRANCH?</label>
                                            </Col>
                                            <Col sm={6} md={4} lg={5} className="text-right">
                                                <div className="btn_group">
                                                    <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                    <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                                </div>
                                                
                                            </Col>
                                            
                                        </Row>
                                        
                                    </div>
                                    <div>
                                        <Row className="choose_back mt-2 p-2 ml-2 mr-2">
                                            <Col lg={5}>
                                                <label className="pt-2 pl-2">SELET BRANCH</label>
                                            </Col>
                                            <Col lg={7}>
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
                                        <span className="pl-3">THIS WILL DISPLAY IN THIS BRANCHES EMAIL SIGNATURE</span>
                                    </div>
                                    <div>
                                        <Row className="choose_back mt-2 p-2 ml-2 mr-2">
                                            <Col lg={5}>
                                                <label className="pt-2 pl-2">SELET VENDOR CAMPAIGN</label>
                                            </Col>
                                            <Col lg={7}>
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
                                    <div className="mt-2">
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
                                                        <span style={{fontSize:'11px'}}>USER BUSINESS HOURS <br></br>BUSINESS HOURS 10AM TO 7PM</span>
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
                                    <div className="flex-row mt-2">
                                        <button className="btn_tag01 ml-3">MONDAY 10.30 AM - 11.30 AN</button>
                                        <button className="btn_tag02 ml-2">MONDAY 12.30 PM - 5.30 PM</button>
                                    </div>
                                    <div>
                                        <Row className="mt-2 p-2 ml-2 mr-2">
                                            <Col lg={5}>
                                                <label className="pt-2 pl-2">NON OPERATIONAL HOUR ACTION</label>
                                            </Col>
                                            <Col lg={7}>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={'CHOOSE ACTION'}
                                                    name="color"
                                                    options={colourOptions2}
                                                    
                                                />
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                    <div className="choose_back mt-2 p-2 ml-2 mr-2">
                                        <Row className="ml-2 mr-2 mt-2" style={{borderBottomColor:'white',borderBottomStyle:'solid'}}>
                                            <Col lg={6} style={{borderRightColor:'white', borderRightStyle:'solid'}}>
                                                <label className="pt-2 pl-3">CHOOSE YOUR VOICE MAIL</label>
                                                <Select
                                                    className="basic-single W-50"
                                                    classNamePrefix="select"
                                                    defaultValue={'VOICE MAIL'}
                                                    name="color"
                                                    options={colourOptions2}
                                                    
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <div className="btn_group">
                                                    <label className="pt-2 pl-3 pr-3">UPLOAD AND RECORD VOICE MAIL</label>
                                                    <div className="flex-row">
                                                        <button className="btn_record pt-2 pb-2 pl-3 pr-3">UPLOAD</button>
                                                        <button className="btn_record pt-2 pb-2 pl-3 pr-3">OR</button>
                                                        <button className="btn_record pt-2 pb-2 pl-3 pr-3">RECORD VM</button>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            
                                            <Col sm={12} md={12} lg={3}>
                                            <div className="flex-row">

                                                 <label className="pt-2 pl-4">RECORD</label>

                                            </div>
                                            </Col>
                                            <Col sm={12} md={12} lg={9}>
                                                <div className="flex-row">
                                                    <Form.Label className="pt-2">NAME YOUR RECORDING</Form.Label>
                                                    <Form.Control type="email" placeholder="RECORDING NAME" className="w-50 ml-3" />
                                                </div>
                                                
                                                
                                            </Col>
                                        </Row>
                                        <div className="mt-2 text-right">
                                            <button className="btn_cancel p-2 text-white">CANCEL</button>
                                            <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                                        </div>
                                    </div>
                                    <Row className="mt-2">
                                        <Col sm={12} md={12} lg={6}>
                                            <label className="ml-5">PLEASE UPLOAD OR RECORD AN IVR STATEMENT</label>
                                        </Col>
                                        <Col sm={12} md={12} lg={6} className="text-right">
                                            <img src={record} width={'5%'}></img>
                                            <label className="ml-3 mr-4">RECORD</label>
                                        </Col>
                                       
                                    </Row>   
                                    
                                    <Row className="mt-3">
                                        <Col lg={9}>
                                            <label className="ml-3">IF LEAD CALLING IN HAS A LEAD OWNER, ROUTE TO LEAD OWNER?</label>
                                        </Col>
                                        <Col lg={3} className="text-right pr-4">
                                            <div className="btn_group">
                                                <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="choose_back mt-2 p-2 ml-2 mr-2">
                                        <Row>
                                            <Col lg={6}>
                                                <label className="pt-2 pl-3">HOW LONG TO RING BEFORE FAILOVER?</label>
                                                <label className="pt-3 pl-3">WHAT HAPPENS ON FAILOVER?</label>
                                            </Col>
                                            <Col lg={6} className="pl-4">
                                                <div className="btn_group">
                                                    <button className="pt-2 pb-2 pl-3 pr-3">TYPE TIME</button>
                                                    <button className="pt-2 pb-2 pl-3 pr-3">SECONDS</button>
                                                </div>
                                                
                                                <Select
                                                    className="basic-single w-75 mt-2"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                            
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col sm={12} md={12} lg={9}>
                                                <label className="pt-2 pl-3">IF TRANSFERED DOES LEAD OWNER RETAIN LEAD OWNERSHIP?</label>
                                            </Col>
                                            <Col sm={12} md={12} lg={3} className="text-right">
                                                <div className="btn_group">
                                                    <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                    <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                    <Row className="mt-3">
                                        <Col sm={12} md={12} lg={9}>
                                            <label className="pl-3">UPLOAD AN MP3 FILE TO PLAY WHILE TRANSFERRING OR ON HOLD?</label>
                                            <label className="pl-3" style={{fontSize:'12px'}}>IF NO FILE IS SELECTED, THE LEAD WILL HEAR RINGING OR HOLD MUSIC</label>
                                        </Col>
                                        <Col sm={12} md={12} lg={3} className="text-right pr-4">
                                            <div className="btn_group">
                                                <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                                <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <div>
                                        <Row className="choose_back mt-2 p-2 ml-2 mr-2">
                                            <Col lg={7}>
                                                <label className="pt-2 pl-2">UPLOAD MP3 FILE</label>
                                                <button className="btn_upload pt-2 pb-2 pl-3 pr-3 ml-3">UPLOAD A MP3 FILE</button>

                                            </Col>
                                            
                                        </Row>
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