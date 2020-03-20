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

class EmailTemplate extends React.Component {
    
    render() {
        return (
            <Aux>
                <div className="mt-3 ml-3 mr-3">
                    <h3>EMAIL CAMPAIGN TEMPLATE LIST</h3>
                    <Table striped responsive>
                        <thead className="text-center">
                        <tr style={{borderRadius:'3rem',background:'gray', color:'white'}}>
                            <th width={'20%'} style={{}}>CREATION DATE</th>
                            <th width={'20%'}>TEMPLATE NAME</th>
                            <th width={'30%'} style={{background:'gray',borderRadius:'3rem',borderColor:'white'}}>
                                
                                {/* <ButtonToolbar>
                                    {basicDropdownButton}
                                </ButtonToolbar> */}
                            </th>
                            <th width={'20%'}>TEMPLATE CONTENT</th>
                            <th width={'10%'}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center justify-content-center">
                        
                            <tr className="pt-2">
                                <td width={'20%'}>7 JULY 2019</td>
                                <td>BRANCH X</td>
                                <td>GENERAL INSURENCE</td>
                                <td><h3>LOGO</h3></td>
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
                    <div className="mt-5 text-center">
                        <a href=""><img width={'5%'} src={add}></img></a>
                        <h3 className="mt-2">ADD SIGNATURE</h3>
                    </div>
                    
                </div>
              
            </Aux>
        );
    }
}

export default EmailTemplate;