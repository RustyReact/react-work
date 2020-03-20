import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../../../hoc/_Aux";
import './../../../../assets/scss/campaign/style.scss';
import checked from './../../../../assets/images/checked.png';
import {NavLink} from 'react-router-dom';

class Blast extends Component {
    render() {
        return (
            <Aux>
                <div className="mt-5 text-center">
                    <h5 className="blast_header mb-3">CHOOSE CAMPAIGN TYPE</h5>
                    <button className="btn_status_drip pl-5 pr-5 pt-1 pb-1"><NavLink to={'/Campaign/EmailCampaignCreation/EmailCampaign/Wireframe'}>STATUS DRIP</NavLink></button><br></br>
                    <button className="btn_drip mt-3 pl-5 pr-5 pt-1 pb-1"><NavLink to={'/Campaign/EmailCampaignCreation/DripEmailCampaign/Wireframe'}>DRIP</NavLink></button><br></br>
                    <button className="btn_blast_selected mt-3 pl-5 pr-5 pt-1 pb-1"><NavLink to={'/Campaign/EmailCampaignCreation/BlastCampaign/Wireframe'}>BLAST</NavLink></button>    
                </div>
                <div className="text-center mt-3 pt-3 pb-3">
                    <Row>
                        <Col sm={3} md={3} lg={3}></Col>
                        <Col sm={6} md={6} lg={6}>
                            <input placeholder="CAMPAIGN NAME" type="text" className="campaign_name form-control float-center"/>
                        </Col>
                    </Row>
                    
                </div>
                <div className="mt-5">
                    <Row>
                        <Col sm={8} md={8} lg={6} className="text-right">
                            <h5 className="pt-2 pb-2">IS THIS A WARM EMAIL OR A COLD EMAIL</h5>
                        </Col>
                        <Col sm={4} md={4} lg={6} className="text-left">
                            <button className="btn_warm pt-1 pb-1 pl-1 pr-1">WARM</button>
                            <button className="btn_cold ml-1 pt-1 pb-2 pl-1 pr-1">COLD</button>
                        </Col>
                    </Row>
                    
                </div>
                <div className="text-center mt-5">
                    <img width={'3%'} src={checked}></img>
                </div>
            </Aux>
            
        );
    }
}

export default Blast;