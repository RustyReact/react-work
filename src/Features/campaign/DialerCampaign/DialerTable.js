import React from 'react';
import {Row, Col, Card, Tabs, Tab, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Slider  from 'rc-slider';
import './../../../assets/scss/campaign/style.scss';
import add from '../../../assets/images/add.png';

class DialerTable extends React.Component {
    render() {
        return (
            <Aux>
                <div>
                        <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                            <Tab eventKey="home" title="PROGRESSIVE">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'25%'}>CAMPAIGN NAME</th>
                                            <th width={'15%'}>PRIORITY NAME</th>
                                            <th width={'45%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>BRANCH X</td>
                                            <td><Slider className="pc-range-slider" min={0} max={100} marks={{ 18: 18, 100: 100}} step={null} /></td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>COPY</h6>
                                                    </Col>
                                                    <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">Edit</h6>
                                                    </Col>
                                                    <Col xs={6} sm={6} md={3} lg={3} className="text-center">
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
                                        <h3 className="mt-2">ADD CAMPAIGN</h3>
                                    </div>
                                    
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="PREDIVTIVE">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'25%'}>CAMPAIGN NAME</th>
                                            <th width={'15%'}>PRIORITY NAME</th>
                                            <th width={'45%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>BRANCH X</td>
                                            <td><Slider className="pc-range-slider" min={0} max={100} marks={{0: 0, 18: 18, 100: 100 }} step={null} /></td>
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
                                        <h3 className="mt-2">ADD CAMPAIGN</h3>
                                    </div>
                                    
                                </div>
                            </Tab>
                            
                        </Tabs>

                    </div>
                {/* <div>
                    <Row className="ml-2">
                        <button className="btn_email_template btn p-2 text-white"></button>
                        <button className="btn_text_temp btn p-2 ml-3">PREDICTIVE</button>
                        
                    </Row>
                </div> */}
                
              
            </Aux>
        );
    }
}

export default DialerTable;