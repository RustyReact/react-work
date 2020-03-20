import React, {Component} from 'react';
import {Row, Col, Form} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import {NavLink} from 'react-router-dom';
import 'jodit';
import './../../assets/scss/config/style.scss';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import add from '../../assets/images/add.png';
import { black } from 'ansi-colors';

//import add from "jodit-react";

class EmailTemplateCreation extends Component {
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
                    <Row className="ml-1">
                        <button className="btn_email_template btn p-2" style={{color:'black'}}>EMAIL TEMPLATE</button>
                        <button className="btn_text_temp btn p-2 ml-3">TEXT TEMPLATE</button>
                        <button className="btn_script_temp btn p-2 ml-3">SCRIPT TEMPLATE</button>
                    </Row>
                </div>
                <div className="mt-3">

                    <h3 className="creation_header">EMAIL TEMPLATE CREATION</h3>
                    <div>
                        <div><Form.Label>NAME EMAIL TEMPLATE</Form.Label></div>
                        <Row>
                            <Col sm={6} md={4} lg={4}>
                                <Row>
                                    <div className="w-75 ml-3">
                                        <Form.Control type="text" placeholder="" />
                                    </div>
                                    
                                </Row>
                                
                            </Col>
                            <Col sm={6} md={8} lg={8} className="pt-1 text-right">
                                <h6>TEMPLATE CREATION DATE  27/15/2019</h6>
                            </Col>
                        </Row>
                        
                    </div>
                    
                </div>
                <div className="mt-2">
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
                                <img className="ml-3" width={'7%'} src={add}></img>
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
                                <img className="ml-3" width={'7%'} src={add}></img>
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
                                <img className="ml-3" width={'7%'} src={add}></img>
                            </Row>
                            
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
                    <button type="button" className="btn btn-secondary">CANCEL</button>
                    <button type="button" className="btn btn-secondary btn-dark">SAVE</button>
                </div>
                
            </Aux>
        );
    }
}

export default EmailTemplateCreation;