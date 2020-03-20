import React from 'react';
import {
    Row,
    Col,
    Button,
    OverlayTrigger,
    Tooltip,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Table,
    Dropdown,
    DropdownButton,
    SplitButton,
    ButtonGroup
} from 'react-bootstrap';

import './../../assets/scss/config/style.scss';
import Aux from "../../hoc/_Aux";
import UcFirst from "../../App/components/UcFirst";
import add from '../../assets/images/add.png';

//import add from '../../../../assets/images/add.jfif';

const buttonOptions = [
    {variant: 'secondary', icon:'feather icon-camera'},
   
];

const basicDropdownButton = buttonOptions.map(
    button => {
        const title = <UcFirst text={button.variant} />;
        return (
        <DropdownButton
            title={title}
            variant={button.variant}
            id={`dropdown-variants-${button.variant}`}
            key={button.variant}
        >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
        </DropdownButton>
    );
});

class TextTemplateList extends React.Component {
    
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
                    <h3>SCRIPT CAMPAIGN TEMPLATE LIST</h3>
                    <Table striped responsive>
                        <thead className="text-center" style={{borderRadius:'3rem',background:'gray', color:'white'}}>
                        <tr>
                            <th width={'10%'}>CREATION DATE</th>
                            <th width={'20%'}>VENDOR CAMPAIGN</th>
                            <th width={'10%'}>
                                
                                {/* <ButtonToolbar>
                                    {basicDropdownButton}
                                </ButtonToolbar> */}
                            </th>
                            <th width={'45%'}>SCRIPT CONTENT</th>
                            <th width={'15%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>7 JULY 2019</td>
                            <td>BRANCH X</td>
                            <td>GENERAL INSURENCE</td>
                            <td>AAAAAAAAAAAAAAAAAAAAAAAAAA</td>
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
                    <div className="mt-4 text-center">
                        <a href=""><img width={'4%'} src={add}></img></a>
                        <h3 className="mt-2">ADD TEMPLATE</h3>
                    </div>
                    
                </div>
              
            </Aux>
        );
    }
}

export default TextTemplateList;