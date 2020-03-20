import React from 'react';
import {Row, Col, Form,} from 'react-bootstrap';

import 'jodit';
import 'jodit/build/jodit.min.css';
import './../../assets/scss/config/style.scss';
import JoditEditor from "jodit-react";
import Select from 'react-select';

import Aux from "../../hoc/_Aux";

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

class Signature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello...',
        }
    }

    updateContent = (value) => {
        this.setState({content:value})
    };

    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false
    };
    

    render() {

        return (
            <Aux>
                <Row className="w-100">
                    <Col sm={3} style={{background:'#e4e4e4'}}>
                        <div className="pr-3 pt-3">
                            <h3>EMAIL SIGNATURE SETTINGS</h3>
                            <Form.Label className="pt-2">SELECT BRANCH</Form.Label>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                            />
                            <div className="mt-2">
                                 <Form.Check
                                    required
                                    label="Select all branches"
                                    feedback="You must agree before submitting."
                                />
                            </div>
                            
                            <Form.Label className="pt-2">SELECT JOB TITLE</Form.Label>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                            />
                            
                            <h4 className="pt-2">SIGNATURE ADDING DATE</h4>
                            <h3 className="pt-2">7/8/2019</h3>
                        </div>
                        
                    </Col>
                    <Col sm={9}>
                        <div className="pl-3 pt-3">
                            <h3>SELECT PRESET TEMPLATE OR UPLOAD YOUR CUSTOP TEMPLATE</h3>
                            <Row className="ml-2">
                                    <Col sm={12} md={12} lg={9}>
                                        <Row>
                                            <div className="template02 pl-3 pr-3 pt-3 pb-4 mt-3 text-center">
                                                <h4 className="pt-2">TEMPLATE 01</h4>
                                            </div>
                                            <div className="template02 ml-2 pl-3 pr-3 pt-3 pb-4  mt-3 text-center justify-content-center">
                                                <h4 className="pt-2">TEMPLATE 02</h4>
                                            </div>
                                            <div className="custom_selected mt-3 ml-2 pt-1 pb-1 pl-2 pr-2  text-center">
                                                <h5 className="pt-2 pl-2 pr-2 text-center">CUSTOM <br></br>TEMPLATE</h5>
                                                <h6 className="ml-4 mr-4 text-center"><span className="pl-2 pr-2">SELECTED</span></h6>
                                            </div>
                                        </Row>
                                    </Col>
                            </Row>
                           
                            
                            <div className="pt-4">
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
                            
                        
                        </div>
                        
                        
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Signature;