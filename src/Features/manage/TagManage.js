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

class TagManage extends React.Component {
    state = {};
    render() {
        return (
            <Aux>
                <div>
                   <h5 className="branch_header ml-2">
                       TAG LISTS
                   </h5>
                </div>
                
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'15%'}>CREATION DATE</th>
                            <th width={'15%'}>TAG NAME</th>
                            <th width={'15%'}>DISTRIBUTION</th>
                            <th width={'45%'}></th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>26 APRIL 2019</td>
                            <td>WEB HOOK NAME</td>
                            <td>URL GOES HERE</td> 
                            <td></td>  
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                        <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">EDIT</h6>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
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
                    <img width={'40px'} src={add}  onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}></img>
                    <h4 className="mt-2" >ADD TAG & DISTRIBUTION</h4>
                </div>
                <div>
                    <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                        <Modal.Body>
                            <div className="text-center">
                                <label className="font_large">CREATION & DISTRIBUTION OF TAGS</label>
                            </div>
                            <div className="pl-4 mt-2">
                                <label>TAG NAME</label><br></br>
                                <Form.Control type="text" className="w-75" placeholder="" />
                            </div>
                            <div className="pl-4 mt-2">
                                <label>DISTRIBUTION NAME</label>
                                <Select
                                    className="basic-single mt-1 w-75"
                                    classNamePrefix="select"
                                    defaultValue={colourOptions1[0]}
                                    name="color"
                                    options={colourOptions1}
                                />
                            </div>
                            <div className="pl-4 mt-2">
                                <label>CHOOSE TAG RULE</label>
                                
                            </div>
                            <div className="mt-2 pl-4">
                                <input type="checkbox" />
                                <label className="font_small ml-1">TAG ALL LEADS INCLUDING FETURE LEADS MATCHING THIS CRITERIA?</label>
                            </div>
                            <div className="mt-1 pl-4">
                                 <input type="checkbox" />
                                 <label className="font_small ml-1">TAG ONLY FUTURE LEADS MATCHING THIS CRITERIA?</label>
                            </div>
                            <div className="pl-4 mt-4">
                                <label>DISTRIBUTION CRITERIA</label>
                            </div>
                           
                            <Row className="ml-4 mr-4 mt-2">
                                
                                <Col sm={6} md={6} lg={4}>
                                    <div>
                                        <label className="font_small mt-2 mr-1">VARIABLE</label><br/>
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={4}>
                                    <label className="font_small">OPERATOR</label>
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                    
                                    <div className="flex-row mt-1">
                                        <Select
                                            className="basic-single w-100 mt-1"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions1[0]}
                                            name="color"
                                            options={colourOptions1}
                                        />
                                    </div>
                                   
                                </Col>
                                <Col sm={7} md={7} lg={4}>
                                    <label className="font_small">CUSTOM VARIABLE</label>
                                    <Row className="mt-1">
                                        <Form.Control type="text" className="ml-3 w-25" placeholder="WA" />
                                        <Form.Control type="text" className="ml-1 w-25" placeholder="CA" />
                                        <Form.Control type="text" className="ml-1 w-25" placeholder="" />
                                    </Row>
                                    <Row className="mt-1">
                                        <Form.Control type="text" className="ml-3 w-75" placeholder="" />
                                        <img className="ml-1" width={'35px'} src={add} />
                                
                                    </Row>
                                </Col>
                            </Row>
                            <div className="text-center mt-3">
                                <img width={'40px'} src={add} /><br/>
                                <label>ADD NEW ROW</label>
                            </div>
                            
                            <div className="mt-3 text-center">
                                <button className="btn_cancel p-2 text-white" onClick={() => this.setState({ isVarying: false })}>CANCEL</button>
                                <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                            </div>
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </Aux>
        );
    }
}

export default TagManage;