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

class AllNoti extends React.Component {
    state = {};
    render() {
        return (
            <Aux>
                <div>
                   <h5 className="branch_header ml-3">
                       All Notification
                   </h5>
                </div>
                <Row className="mt-3">
                    <Col>
                         <div className="flex-row pl-3">
                            <Select
                                className="basic-single w-25"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                            />
                            <Select
                                className="basic-single ml-3 w-25"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                            />
                            <Select
                                className="basic-single ml-3 w-25"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                            />
                        </div>
                    </Col>
                    <Col className="text-right mr-4">
                        <button className="btn_dismiss pt-1 pb-1 mt-2">DISMISS ALL</button>
                    </Col>
                </Row>
                <div className="mt-3 ml-3 mr-3">
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'10%'}>NOTIFICATION DATE</th>
                            <th width={'10%'}>USER</th>
                            <th width={'10%'}>CATEGORY</th>
                            <th width={'10%'}>CATEGORY</th>
                            <th width={'50%'}></th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>26 APRIL 2019</td>
                            <td> NAME</td>
                            <td>URL GOES HERE</td> 
                            <td>Notification Description Goes Here</td>  
                            <td></td>  
                            <td>
                                    
                                <button className="bt_black pt-3 pb-3 pl-3 pr-3"></button>
                                <h6 className="text-center pl-1">DISMISS</h6>
                                
                            </td>
                        </tr>
                       
                        </tbody>
                    </Table>
                    
                </div>
                
            </Aux>
        );
    }
}

export default AllNoti;