import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "./../../../../../hoc/_Aux";
import './../../../../../assets/scss/campaign/style.scss';
import checked from './../../../../../assets/images/checked.png';
import {NavLink} from 'react-router-dom';

import Select from 'react-select';
export const colourOptions = [
    { value: 'email address', label: 'WHAT NUMBER WILL BE USED FOR THIS IVR', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

class LocalCaller extends Component {
    render() {
        return (
            <Aux>
                <div className="mt-5 text-center">
                    <h5 className="blast_header mb-3">LOCAL CALLER ID</h5>
                    <button className="btn_multi_line pl-2 pr-2 pt-1 pb-1"><NavLink to={'/Campaign/IVRCampaign/InboundIVR/Single/Wireframe'}>SINGLE LINE IVR ACTION</NavLink></button><br></br>
                    <button className="btn_single_line_selected mt-3 pt-1 pb-1 pl-2 pr-2"><NavLink to={'/Campaign/IVRCampaign/InboundIVR/LocalCaller/LocalMultiWireframe'}>MULTILINE IVR ACTION</NavLink></button><br></br>
                </div>
                <div className="text-center mt-3 pt-3 pb-3">
                    <Row>
                        <Col sm={3} md={3} lg={3}></Col>
                        <Col sm={6} md={6} lg={6}>
                            <div>
                                <input placeholder="CAMPAIGN NAME" type="text" className="campaign_name form-control float-center"/>
                            </div>
                            <div className="mt-3">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={'WHAT NUMBER WILL BE USED FOR THIS LOCAL CALLER ID'}
                                    name="color"
                                    options={colourOptions}
                                />
                            </div>
                            <div>
                                <lable>NOTE FOR EACH NUMBER CHOSEN WE WILL CLONE THE IVR ACTIONS YOU SETUP IN THE NEXT SCREEN</lable>
                            </div>
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

export default LocalCaller;