import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import './../../assets/scss/config/style.scss';
import {NavLink} from 'react-router-dom';

class Creation extends Component {
    render() {
        return (
            <Aux>
                <div className="mt-5 pt-5 text-center">
                    <h5 >WELCOME TO TEMPLATE CREATION</h5>
                </div>
                <div className="mt-4">
                    <Row className="ml-5 mr-5 mt-3 mb-3">
                        <Col className="creation_round" sm={6} md={6} lg={4}>
                            <Row className="mt-2">
                                <div className="manually ml-3 p-4">
                                </div>
                                <div className="ml-3 pt-3 text-center">
                                    <h4 className="import_text"><NavLink to="/confiuration/creation/EmailTemplateCreation">Email TEMPLATE</NavLink></h4>   
                                </div>
                            </Row>
                        </Col>
                        <Col className="creation_round" sm={6} md={6} lg={4}>
                            <Row className="mt-2">
                                <div className="csv ml-3 p-4">
                                </div>
                                <div className="ml-3 pt-3 text-center">
                                    <h4 className="pr-3 import_text"><NavLink to="/confiuration/creation/EmailTemplateCreation">TEXT TEMPLATE</NavLink></h4>   
                                </div>
                            </Row>
                        </Col>
                        <Col sm={6} md={6} lg={4}>
                            <Row className="mt-2">
                                <div className="source ml-3 p-4">
                                </div>
                                <div className="ml-3 pt-3 text-center">
                                    <h4 className="pr-3 import_text"><NavLink to="/confiuration/creation/EmailTemplateCreation">SCRIPT TEMPLATE</NavLink></h4>   
                                </div>
                            </Row>
                        </Col>
                        
                    </Row>
                </div>
            </Aux>
        );
    }
}

export default Creation;