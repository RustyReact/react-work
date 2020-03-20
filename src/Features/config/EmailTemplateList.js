import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import './../../assets/scss/config/style.scss';
import add from '../../assets/images/add.png';

class EmailTemplateList extends React.Component {
    render() {
        return (
            <Aux>
                <div>
                    <Row className="ml-2">
                        <button className="btn_email_template btn p-2">EMAIL TEMPLATE</button>
                        <button className="btn_text_temp btn p-2 ml-3">TEXT TEMPLATE</button>
                        <button className="btn_script_temp btn p-2 ml-3">SCRIPT TEMPLATE</button>
                    </Row>
                </div>
                <div className="mt-3 ml-3 mr-3">
                    <h3>EMAIL CAMPAIGN LIST</h3>
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr>
                            <th width={'10%'}>CREATION DATE</th>
                            <th width={'20%'}>TEMPLATE NAME</th>
                            <th width={'10%'}>BRANCH NAME</th>
                            <th width={'45%'}>TEMPLATE CONTENT</th>
                            <th width={'12%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>7 JULY 2019</td>
                            <td>BRANCH X</td>
                            <td>GENERAL INSURENCE</td>
                            <td>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</td>
                            <td>
                                <Row className="w-100 mr-1">
                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center" style={{alignItems:'center'}}>DUPLI<br></br>CATE</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">Edit</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                        <h6 className="text-center pl-1">Del</h6>
                                    </Col>
                                    
                                </Row>
                                
                            </td>
                        </tr>
                       
                        </tbody>
                    </Table>
                    <div className="mt-3 text-center">
                        <a href=""><img width={'4%'} src={add}></img></a>
                        <h3 className="mt-2">ADD SIGNATURE</h3>
                    </div>
                    
                </div>
              
            </Aux>
        );
    }
}

export default EmailTemplateList;