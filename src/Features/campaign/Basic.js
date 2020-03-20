import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import './../../assets/scss/campaign/style.scss';
import {NavLink} from 'react-router-dom';

class Basic extends Component {
    render() {
        return (
            <Aux>
                <div className="mt-5 pt-5 text-center">
                    <h2 style={{fontSize:'16px'}}>WHAT KIND OF CAMPAIGN YOU WANT TO START WITH</h2>
                </div>
                <Row>
                    <Col sm={1} md={1} lg={2}></Col>
                    <Col sm={10} md={10} lg={8}>
                        <Row className="ml-5 mr-5 mt-5">
                            <Col sm={6} md={6} lg={6} className="bottom_right pb-4">
                                <Row className="mt-2">
                                    <div className="email_text ml-3 p-4">
                                    </div>
                                    <div className="ml-3 pt-3 text-center">
                                        <h4 style={{fontSize:'14px'}}><NavLink to="/Campaign/EmailCampaignCreation/BlastCampaign/Blast">Email CAMPAIGN</NavLink></h4>   
                                    </div>
                                </Row>
                            </Col>
                            <Col sm={6} md={6} lg={6} className="text_camp pb-4">
                                <Row className="mt-2">
                                    <div className="email_text ml-3 p-4">
                                    </div>
                                    <div className="ml-3 pt-3 text-center">
                                        <h4 className="pr-3" style={{fontSize:'14px'}}><NavLink to="/Campaign/TextCampaign/BlastCampaign/Blast">TEXT CAMPAIGN</NavLink></h4>   
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="ml-5 mr-5 mb-3">
                            <Col sm={6} md={6} lg={6} className="dialer_camp pb-3">
                                <Row className="pt-4">
                                    <div className="email_text ml-3 p-4">
                                    </div>
                                    <div className="ml-3 pt-3 text-center">
                                        <h4 className="pr-3" style={{fontSize:'14px'}}><NavLink to="/Campaign/DialerCampaign/DialerTable">DIALER CAMPAIGNS</NavLink></h4>   
                                    </div>
                                </Row>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <Row className="pt-4">
                                    <div className="email_text ml-3 p-4">
                                    </div>
                                    <div className="ml-3 pt-3 text-center">
                                        <h4 className="pr-3" style={{fontSize:'14px'}}><NavLink to="/Campaign/IVRCampaign/IvirTable">IVR CAMPAIGNS</NavLink></h4>   
                                    </div>
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

export default Basic;