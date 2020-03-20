import React, {Component} from 'react';
import {Row,
    Col,
    Modal,
    Form} from 'react-bootstrap';

import Select from 'react-select';
import Slider  from 'rc-slider';
import Tooltip from 'rc-tooltip';
import Aux from "./../../../../hoc/_Aux";
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
                <Row>
                    <Col sm={1} md={1} lg={2}></Col>
                    <Col sm={10} md={10} lg={8}>
                        <div className="text-center">
                            <h3>OUTGOING SETTING</h3>
                        </div>
                        <div>
                            <Row className="mt-3">
                                <input placeholder="CAMPAIGN NAME" type="text" className="campaign_name form-control float-center"/>
                            </Row>
                            <Row>
                                <Col className="mt-2">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="color"
                                        options={colourOptions}
                                    />
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col lg={6} className="mt-2">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="color"
                                        options={colourOptions}
                                    />
                                </Col>
                                <Col lg={6} className="mt-2">
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
                            <label className="ml-3">FROM WHEN TO WHEN DOES THIS CAMPAIGN RUN?</label>
                        </div>
                        <div>
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
                                        <img className="ml-2" width={'8%'} src={add}></img>
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
                        <div className="mt-2 p-2 ml-2 mr-2">
                            <Row>
                                <Col lg={6}>
                                    <label className="pt-2 pl-3">HOW LONG TO RING BEFORE FAILOVER?</label>
                                    <label className="pt-3 pl-3">WHAT HAPPENS ON FAILOVER?</label>
                                </Col>
                                <Col lg={6}>
                                    <div className="btn_group pl-4">
                                        <button className="pt-2 pb-2 pl-3 pr-3">TYPE TIME</button>
                                        <button className="pt-2 pb-2 pl-3 pr-3">SECONDS</button>
                                    </div>
                                    
                                    <Select
                                        className="basic-single w-75 mt-2 pl-4"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="color"
                                        options={colourOptions}
                                    />
                                
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm={9} md={9} lg={9}>
                                    <label className="pt-2 pl-3">IF TRANSFERED DOES LEAD OWNER RETAIN LEAD OWNERSHIP?</label>
                                </Col>
                                <Col sm={3} md={3} lg={3} className="text-right">
                                    <div className="btn_group">
                                        <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                        <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        
                        <Row className="mt-2">
                            <Col sm={8} md={7} lg={6}>
                                <label className="ml-4">PLEASE UPLOAD OR RECORD AN IVR STATEMENT</label>
                            </Col>
                            <Col sm={4} md={5} lg={6} className="text-right">
                                <img src={record} width={'5%'}></img>
                                <label className="ml-3 mr-4">RECORD</label>
                            </Col>
                            
                        </Row>   
                        <Row className="mt-2">
                            <Col sm={6} md={6} lg={6} className="pl-5 mt-1">
                                <Slider className="pc-range-slider triangle-handler" defaultValue={20} handle={handle} trackStyle={[{ backgroundColor: '#ffffff' }]} handleStyle={[{ borderBottomColor: '#000' }]} />
                            </Col>
                            <Col sm={6} md={6} lg={6} className="text-right">
                                <img width={'7%'} src={remove} className="mr-4"></img>
                            </Col>
                            
                        </Row>
                        <label className="ml-3">PLEASE SPECIFY THE NUMBER YOU'D LIKE TO ASSOCIATE TO YOUR ACTION</label>
                        <Row className="pl-5">
                                <Form.Control type="text" placeholder="TYPE IN NUMBER" className="w-50" />
                                <img src={add} width={'4%'} className="ml-2"></img>
                        </Row>
                        <Row className="ml-3 pl-3">
                            <Col sm={4} md={4} lg={4} >
                                <Row className="mt-2">
                                    <button className="btn_white">1</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">4</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">7</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                            </Col>
                            <Col sm={4} md={4} lg={4} className="pl-3">
                                <Row className="mt-2">
                                    <button className="btn_white">2</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">5</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">8</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                            </Col>
                            <Col sm={4} md={4} lg={4} className="pl-3">
                                <Row className="mt-2">
                                    <button className="btn_white">3</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">6</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <button className="btn_white">9</button>
                                    <Select
                                        className="basic-single w-75 ml-1"
                                        classNamePrefix="select"
                                        defaultValue={'CHOOSE ACTION'}
                                        name="color"
                                        options={colourOptions2}
                                        
                                    />
                                </Row>
                            </Col>
                        </Row>
                      
                    </Col>
                    <Col sm={1} md={1} lg={2}></Col>
                </Row>
                
            </Aux>
            
        );
    }
}

export default Wireframe;