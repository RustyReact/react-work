import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import './../../assets/scss/config/style.scss';
import add from '../../assets/images/add.png';

class TemplateMenu extends React.Component {
    render() {
        return (
            <Aux>
                <div className="mt-3 ml-3 mr-3">
                    <h3>EMAIL SIGNATURE ADDED</h3>
                    <Table striped responsive>
                        <thead className="text-center" style={{borderRadius:'3rem',background:'gray', color:'white'}}>
                        <tr>
                            <th width={'20%'}>SIGNATURE ADDED DATE</th>
                            <th width={'10%'}>BRANCH</th>
                            <th width={'20%'}>JOB TITLE</th>
                            <th width={'15%'}>SIGNATURE TEMPLATE</th>
                            <th width={'25%'}></th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>7 JULY 2019</td>
                            <td>BRANCH X</td>
                            <td>GENERAL INSURENCE</td>
                            <td><h3>LOGO</h3></td>
                            <td></td>
                            <td>
                                <Row className="mr-2">
                                    <Col xs={12} sm={6} md={6} lg={6} className="text-center">
                                        <button className="pt-3 pb-3 pl-3 pr-3" style={{borderStyle:'solid',borderColor:'gray', borderRadius:'2.5rem', background:'gray'}}></button>
                                        <h5>Edit</h5>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} className="text-center">
                                        <button className="pt-3 pb-3 pl-3 pr-3" style={{borderStyle:'solid',borderColor:'gray',borderRadius:'4rem', background:'gray'}}></button>
                                        <h5>Del</h5>
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

export default TemplateMenu;