import React from 'react';
import {Row, Col, Card, Tabs, Tab, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Slider  from 'rc-slider';
import './../../../assets/scss/campaign/style.scss';
import add from '../../../assets/images/add.png';
import Tooltip from 'rc-tooltip';
import Select from 'react-select';

export const colourOptions = [
    { value: 'email address', label: 'AGENTS PER PAGE    10', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

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

class IvirTable extends React.Component {
    render() {
        return (
            <Aux>
                <div>
                        <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                            <Tab eventKey="home" title="UNASSIGNED NUMBER(S)">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'15%'}>PHONE NUMBER</th>
                                            <th width={'20%'}>BRANCH NAME</th>
                                            <th width={'40%'}></th>
                                            <th width={'10%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>111-222-3333</td>
                                            <td>BRANCH X</td>
                                            <td></td>
                                            <td>
                                                <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                <h6 className="text-center pl-1">Del</h6>
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    <div className="mt-3 text-center">
                                        <a href=""><img width={'4%'} src={add}></img></a>
                                        <h3 className="mt-2">ADD NUMBER</h3>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="ivbound" title="IVBOUND IVR">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'20%'}>CAMPAIGN NAME</th>
                                            <th width={'15%'}>BRANCH NAME</th>
                                            <th width={'30%'}></th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                            </td>
                                            <td>BRANCH X</td>
                                            <td></td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>COPY</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">Edit</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">DEL</h6>
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
                            <Tab eventKey="local" title="LOCAL CALLER ID">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'20%'}>CAMPAIGN NAME</th>
                                            <th width={'15%'}>BRANCH NAME</th>
                                            <th width={'30%'}>STATE/PROVIENCE ASSIGNED</th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                            </td>
                                            <td>BRANCH X</td>
                                            <td>WEST BENGAL</td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>COPY</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">Edit</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">DEL</h6>
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
                            <Tab eventKey="outgoing" title="OUTGOING IVR NOTIFICATION">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'15%'}>CAMPAIGN NAME</th>
                                            <th width={'15%'}>BRANCH NAME</th>
                                            <th width={'15%'}>NOTIFIED NUMBER</th>
                                            <th width={'20%'}></th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>
                                                 <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                 />
                                            </td>
                                            <td>BRANCH X</td>
                                            <td>123-123-1111</td>
                                            <td></td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">EDIT</h6>
                                                    </Col>
                                                    <Col xs={12} sm={12} md={6} lg={4} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">DEL</h6>
                                                    </Col>
                                                    
                                                </Row>
                                                
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    <div className="mt-3 text-center">
                                        <a href=""><img width={'4%'} src={add}></img></a>
                                        <h3 className="mt-2">ADD NOTIFICATION</h3>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="voice" title="OUTGOING IVR VOICE BLAST">
                                <div className="mt-3 ml-3 mr-3">
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>CREATION DATE</th>
                                            <th width={'20%'}>CAMPAIGN NAME</th>
                                            <th width={'10%'}>BRANCH NAME</th>
                                            <th width={'15'}>PHONE NUMBER</th>
                                            <th width={'20%'}>REAMAINING COUNT</th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={colourOptions[0]}
                                                    name="color"
                                                    options={colourOptions}
                                                />
                                            </td>
                                            <td>BRANCH X</td>
                                            <td>111-222-1111</td>
                                            <td>1234</td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>COPY</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">Edit</h6>
                                                    </Col>
                                                    <Col xs={12} sm={6} md={6} lg={3} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">DEL</h6>
                                                    </Col>
                                                    
                                                </Row>
                                                
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                    <div className="mt-3 text-center">
                                        <a href=""><img width={'4%'} src={add}></img></a>
                                        <h3 className="mt-2">ADD VOICE BLAST</h3>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="user" title="USER ASSIGNED NUMBERS">
                                <div className="mt-3 ml-3 mr-3">
                                    <div className="flex-row mt-3">
                                        <h5 className="pt-1">AUTOMATICALLY ASSIGN NUMBER TO AGENTS?</h5>
                                        <button className="btn_apply ml-3 p-2">APPLY</button>
                                    </div>
                                    <div className="flex-row mt-3">
                                        <h5 className="pt-1">APPLY VOICE MAIL TO?</h5>
                                        <button className="btn_apply" className="btn_apply ml-3 p-2">APPLY</button>
                                    </div>
                                    <Row>
                                        <Col lg={9}>
                                            <div className="flex-row mt-3">
                                                <h5 className="pt-1"> HOW LONG TO RING IN SECONDS BEFORE VOICEMAIL?</h5>
                                                <button className="btn_apply_to" className="btn_apply ml-3 p-2">APPLY TO ALL</button>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    <Row className="mt-3 mb-3">
                                        <Col sm={8} md={8} lg={9}>
                                        </Col>
                                        <Col sm={4} md={4} lg={3}>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </Col>
                                    </Row>
                                    <Table striped responsive>
                                        <thead className="text-center">
                                        <tr>
                                            <th width={'15%'}>AGENTS</th>
                                            <th width={'15%'}>BRANCH NAME</th>
                                            <th width={'15%'}>TEAM NAME</th>
                                            <th width={'15%'}>PHONE NUMBER</th>
                                            <th width={'20%'}>VOICEMAIL</th>
                                            <th width={'20%'}>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>7 JULY 2019</td>
                                            <td>BRANCH X</td>
                                            <td>TEAM</td>
                                            <td>111-222-3333</td>
                                            <td><Slider className="pc-range-slider" min={0} max={100} marks={{35: 35, 0:0, 100: 100 }} included={false} defaultValue={35} handle={handle} /></td>
                                            <td>
                                                <Row className="w-100 mr-1">
                                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center" style={{alignItems:'center'}}>INACTIVE</h6>
                                                    </Col>
                                                    <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                                                        <button className="bt_gray pt-3 pb-3 pl-3 pr-3"></button>
                                                        <h6 className="text-center pl-1">DEL NUMBER</h6>
                                                    </Col>
                                                   
                                                </Row>
                                                
                                            </td>
                                        </tr>
                                    
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            
                        </Tabs>

                    </div>
               
              
            </Aux>
        );
    }
}

export default IvirTable;