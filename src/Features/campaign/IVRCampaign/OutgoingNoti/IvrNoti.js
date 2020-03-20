import React, {Component} from 'react';
import {Row,
    Col,
    Modal,
    Form} from 'react-bootstrap';

import Select from 'react-select';
import Slider  from 'rc-slider';
import Tooltip from 'rc-tooltip';
import Aux from "../../../../hoc/_Aux";
import add from './../../../../assets/images/add.png';
import record from './../../../../assets/images/record.png';
import remove from './../../../../assets/images/remove.png';
import './../../../../assets/scss/campaign/style.scss';
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

class IvrNoti extends Component {
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
                <Row>
                    <Col sm={1} md={1} lg={2}></Col>
                    <Col sm={10} md={10} lg={8}>
                        <div className="text-center">
                            <h4>IVR NOTIFICATION BRANCH X</h4>
                        </div>
                        <label className="mt-3 ml-4">WHAT VENDORS WILL BE EXCLUDED FROM NOTIFICATION?</label>
                        <Row className="flex-row ml-2">
                            <Select
                                className="basic-single w-50 ml-3"
                                classNamePrefix="select"
                                defaultValue={colourOptions1[0]}
                                name="color"
                                options={colourOptions1}
                            />
                            <img className="ml-2" width={'4%'} src={add}></img>
                            
                        </Row>
                        <button className="btn_tag01 ml-4 mt-2">VENDOR X</button>
                        <div className="">
                            <label className="mt-3 ml-4">WHAT VENDORS WILL BE EXCLUDED FROM NOTIFICATION?</label>
                        </div>
                        <Row className="flex-row ml-2">
                            <Select
                                className="basic-single w-50 ml-3"
                                classNamePrefix="select"
                                defaultValue={colourOptions1[0]}
                                name="color"
                                options={colourOptions1}
                            />
                            <img className="ml-2" width={'4%'} src={add}></img>
                            
                        </Row>
                        <button className="btn_tag01 ml-4 mt-2">CAMPAIGN X</button>
                        <Row className="mt-2">
                            <Col md={7} lg={9}>
                                <label className="ml-3 ml-4">WOULD YOU LIKE TO ONLY RECEIVE THIS NOTIFICATION WHEN ALL USERS ARE OFFlINE/BUSY/AWAY?</label>
                            </Col>
                            <Col md={5} lg={3} className="pl-5">
                                <div className="btn_group">
                                    <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                    <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                </div>
                            </Col>
                           
                        </Row>
                        <div className="">
                            <label className="mt-3 ml-4">WHAT NUMBER(S) WILL BE DIALED FOR THIS NOTIFICAION?</label>
                        </div>
                        <Row className="flex-row ml-2">
                            <Select
                                className="basic-single w-50 ml-3"
                                classNamePrefix="select"
                                defaultValue={colourOptions1[0]}
                                name="color"
                                options={colourOptions1}
                            />
                            <img className="ml-2" width={'4%'} src={add}></img>
                            
                        </Row>
                        <Row>
                            <button className="btn_tag01 ml-5 mt-2">123-456-789</button>
                            <button className="btn_tag01 ml-2 mt-2">123-456-789</button>
                        </Row>
                        <Row>
                            <label className="mt-2 ml-5">WOULD YOU LIKE TO DELAY THE NOTIFICAION BETWEEN A SPECIFIC DATE/TIME OF THE WEEK</label>
                            <div className="text-right mr-4 ml-5">
                                <div className="btn_group">
                                    <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                    <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                </div>
                            </div>
                        </Row>
                        
                        <div className="choose_back ml-4 mr-4 mt-2 pb-2">
                            <Row>
                                <Col sm={9} md={8} lg={6} className="mt-2">
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
                            <div className="flex-row mt-2">
                                <button className="btn_tag01 ml-3">MONDAY 10.30 AM - 11.30 AN</button>
                                <button className="btn_tag02 ml-2">MONDAY 12.30 PM - 5.30 PM</button>
                            </div>
                        </div>
                        <div className="pr-5">
                            <label className="mt-2 ml-4">WHAT WOULD YOU LIKE THE VOICE BROADCAST TO SAY?</label>
                            <input type="text" placeholder="TYPE YOUR TEXT" className="form-control ml-4"/>
                        </div>
                        <div className="mt-2 pl-4 pr-3">
                            <Row>
                                <Col sm={6} md={4} lg={4}>
                                    <Row>
                                        <div className="ml-3">
                                        <Form.Label>LEAD VARIABLE</Form.Label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="w-75 ml-3">
                                            <Form.Control type="text" placeholder="" />
                                        </div>
                                        <img className="ml-3" width={'11%'} src={add}></img>
                                    </Row>
                                    
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Row>
                                        <div className="ml-3">
                                            <Form.Label>USER VARIABLE</Form.Label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="w-75 ml-3">
                                            <Form.Control type="text" placeholder="" />
                                        </div>
                                        <img className="ml-3" width={'11%'} src={add}></img>
                                    </Row>
                                    
                                    
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Row>
                                        <div className="ml-3">
                                            <Form.Label>BRANCH VARIABLE</Form.Label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="w-75 ml-3">
                                            <Form.Control type="text" placeholder="" />
                                        </div>
                                        <img className="ml-3" width={'11%'} src={add}></img>
                                    </Row>
                                    
                                </Col>
                            </Row>
                        </div>
                        
                        <div className="mt-2 text-center">
                            <button className="btn_cancel p-2 text-white">CANCEL</button>
                            <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                        </div>
                    </Col>
                    <Col sm={1} md={1} lg={2}></Col>
                </Row>
                
            </Aux>
            
        );
    }
}

export default IvrNoti;