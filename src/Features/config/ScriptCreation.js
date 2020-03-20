import React, {Component} from 'react';
import {Row, Col, Form} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import {NavLink} from 'react-router-dom';
import 'jodit';
import 'jodit/build/jodit.min.css';
import './../../assets/scss/config/style.scss';
import Select from 'react-select';
import JoditEditor from "jodit-react";
import add from '../../assets/images/add.png';
import check from '../../assets/images/blue_checked.png';

export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E', isFixed: true },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

class ScriptCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello...',
        }
    }

    render() {
        return (
            <Aux>
                <div>

                    <h3 style={{fontSize:'16px'}}>SCRIPT TEMPLATE CREATION</h3>
                    <Row className="ml-2">
                        <Col sm={6} md={6} lg={4}>
                            <Row>
                                <button className="btn_tab01 btn-rounded p-2">TAB 01</button>
                                <button className="btn_tab02 btn-rounded p-2 ml-3">TAB 02</button>
                                {/* <button className="btn-rounded p-2 m-3" style={{background:'black', color:'white'}}></button> */}
                                <img className="ml-2 pt-2 pb-2" width={'5%'} src={add}></img>
                            </Row>
                        </Col>
                        <Col sm={6} md={6} lg={8} className="text-right">
                            <Form.Label>TEMPLATE CREATION DATE 27/15/2019</Form.Label>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm={6} md={6} lg={4}>
                            <h3 style={{fontSize:'14px'}}>NAME THE TAB</h3>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col sm={6} md={6} lg={4} className="pl-4">
                        <Form.Label>CHOOSE VENDOR CAMPAGIN</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col sm={12} md={6} lg={4} className="pr-5">
                        </Col>
                    </Row>
                </div>
                <div className="mt-2">
                    <Row>
                        <Col sm={4} md={4} lg={3}>
                            <Row>
                                <div className="ml-3">
                                <Form.Label>LEAD VARIABLE</Form.Label>
                                </div>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col sm={2} md={2} lg={1}>
                            <div>
                            <Form.Label>FORM FILL</Form.Label>
                            </div>
                            <div>
                                <Row>
                                    <Col sm={7} md={7} lg={7}>
                                        <img width={'110%'} src={check}></img>
                                    </Col>
                                    <Col sm={5} md={5} lg={5}>
                                        <img className="pt-1 pb-2" width={'125%'} src={add}></img>
                                    </Col>
                                </Row>   
                                    
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={3}>
                            <Row>
                                <div className="ml-4">
                                    <Form.Label>USER VARIABLE</Form.Label>
                                </div>
                            </Row>
                            <Row>
                                <Col className="ml-3">
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                                
                            </Row>
                            
                            
                        </Col>
                        <Col sm={2} md={2} lg={1}>
                            <div>
                                <Form.Label>FORM FILL</Form.Label>
                            </div>
                            <div>
                                <Row>
                                    <Col sm={7} md={7} lg={7}>
                                        <img width={'110%'} src={check}></img>
                                    </Col>
                                    <Col sm={5} md={5} lg={5}>
                                        <img className="pt-1 pb-2" width={'125%'} src={add}></img>
                                    </Col>
                                </Row>    
                                    
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={3}>
                            <Row>
                                <div className="ml-3">
                                     <Form.Label>BRANCH VARIABLE</Form.Label>
                                </div>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                     <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                                    
                                
                            </Row>
                            
                        </Col>
                        <Col sm={2} md={2} lg={1}>
                            <div>
                                 <Form.Label>FORM FILL</Form.Label>
                            </div>
                            <div>
                                <Row>
                                    <Col sm={7} md={7} lg={7}>
                                        <img width={'110%'} src={check}></img>
                                    </Col>
                                    <Col sm={5} md={5} lg={5}>
                                        <img className="pt-1 pb-2" width={'125%'} src={add}></img>
                                    </Col>
                                </Row>   
                                    
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mt-3">
                     <JoditEditor
                            editorRef={this.setRef}
                            value={this.state.content}
                            config={this.config}
                            onChange={this.updateContent}
                        />
                </div>
                <div className="mt-3 text-right">
                    <button type="button" class="btn btn-secondary">CANCEL</button>
                    <button type="button" class="btn btn-secondary btn-dark">SAVE</button>
                </div>
                
            </Aux>
        );
    }
}

export default ScriptCreation;