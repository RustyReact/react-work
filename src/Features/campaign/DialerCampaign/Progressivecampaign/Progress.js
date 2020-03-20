import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Slider  from 'rc-slider';

import Aux from "../../../../hoc/_Aux";
import './../../../../assets/scss/campaign/style.scss';
import checked from './../../../../assets/images/checked.png';
import {NavLink} from 'react-router-dom';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class Progress extends Component {
    render() {
        return (
            <Aux>
                <div className="mt-5 text-center">
                    <h5 className="blast_header mb-3">CHOOSE CAMPAIGN TYPE</h5>
                    <button className="btn_blast_selected pl-5 pr-5 pt-1 pb-1"><NavLink to={'/Campaign/DialerCampaign/Progressivecampaign/Wireframe'}>PROGRESSIVE</NavLink></button><br></br>
                    <button className="btn_drip mt-3 pl-5 pr-5 pt-1 pb-1"><NavLink to={'/Campaign/DialerCampaign/Progressivecampaign/Wireframe'}>PREDICTIVE</NavLink></button>    
                </div>
                <div className="text-center mt-3 pt-3 pb-3">
                    <Row>
                        <Col sm={3} md={3} lg={3}></Col>
                        <Col sm={6} md={6} lg={6}>
                            <input placeholder="CAMPAIGN NAME" type="text" className="campaign_name form-control float-center"/>
                            <Row className="mt-4">
                                <Col sm={6} md={6} lg={6} className="text-left">
                                    <label>PRIORITY SLIDER</label><br></br>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <Slider className="pc-range-slider" min={0} max={100} marks={{35: 35, 0:0, 100: 100 }} included={false} defaultValue={35} handle={handle} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </div>
                <div className="mt-5">
                    <Row>
                        <Col sm={8} md={8} lg={7} className="text-right">
                            <h5 className="pt-2 pb-2" >WOULD YOU LIKE TO ENABLE CALL AVAILABILITY AL?</h5>
                            
                        </Col>
                        <Col sm={4} md={4} lg={5} className="text-left">
                            <div className="btn_group">
                                <button className="btn_yes pt-2 pb-2 pl-3 pr-3">Yes</button>
                                <button className="btn_no pt-2 pb-2 pl-3 pr-3">No</button>
                            </div>
                        </Col>
                                

                    </Row>
                    <div className="text-center"><h6 style={{fontSize:'12px'}}>Our system will use machine learning to determine the best time to reach the lead after a few calls</h6></div>
                </div>
                <div className="text-center mt-5">
                    <img width={'3%'} src={checked}></img>
                </div>
            </Aux>
            
        );
    }
}

export default Progress;