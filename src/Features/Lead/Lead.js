import React from 'react';
import {Row,
    Col,
    Card,
    Modal,
    Button,
    Form,
    Dropdown,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    DropdownButton,
    SplitButton,
    ButtonGroup,
    Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Select from 'react-select';
import './../../assets/scss/config/style.scss';
import UcFirst from "../../App/components/UcFirst";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );

const buttonOptions = [
    {variant: 'Filter', icon:'feather icon-camera'}
];

export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E', isFixed: true },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

const splitDropdownButton = buttonOptions.map(
    button => {
        const title = <UcFirst text={button.variant} />;
        return (
        <SplitButton
            title={title}
            variant={button.variant}
            id={`dropdown-split-variants-${button.variant}`}
            key={button.variant}
            className="mr-2 mb-2 btn-rounded btn btn-secondary"
        >
            <Dropdown.Item eventKey="1">Filter Saved01</Dropdown.Item>
            <Dropdown.Item eventKey="2">Filter Saved02</Dropdown.Item>
            <Dropdown.Item eventKey="3">Filter Saved03</Dropdown.Item>
        </SplitButton>
    );
});

const names = [
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    {
        "id": 1,
        "creation_date": "10 JULY 2019",
        "name": "System Architect",
        "email_address": "cfo@gmail.com",
        "phone_number": "12323123123",
        "company_name": "world",
        "Natrimony": "married",
        "engine_cc": "1200 cc",
        "car_cache_no": "wbas125",
        "lead_status": "status",
        "lead_ownership": "adi leads",
        "last_activity": "12 july 2019"
    },
    
];

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    let tableButton = '#datatable-button';
    
   
    let tableScroll = '#data-table-scroll';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableScroll).DataTable( {
        data: names,
        order: [[ 0, "asc" ]],
        columns: [
            { "data": "id", render: function (data, type, row) {return data;}},
            { "data": "creation_date", render: function (data, type, row) {return data;}},
            { "data": "name", render: function (data, type, row) {return data;}},
            { "data": "email_address", render: function (data, type, row) {return data;}},
            { "data": "phone_number", render: function (data, type, row) {return data;}},
            { "data": "company_name", render: function (data, type, row) {return data;}},
            { "data": "Natrimony", render: function (data, type, row) {return data;}},
            { "data": "engine_cc", render: function (data, type, row) {return data;}},
            { "data": "car_cache_no", render: function (data, type, row) {return data;}},
            { "data": "lead_status", render: function (data, type, row) {return data;}},
            { "data": "lead_ownership", render: function (data, type, row) {return data;}},
            { "data": "last_activity", render: function (data, type, row) {return data;}}
        ],
        scrollY: "325px",
        scrollX: true,
        responsive: true,
        paging: false,
        searching: false,
        scrollCollapse: true
    });

   
}

class Lead extends React.Component {

    state = {
        isBasic: false,
        isVertically: false,
        isTooltip: false,
        isGrid: false,
        isScrolling: false,
        isLarge: false,
        title: ''
    };

    componentDidMount() {
        atable()
    }

    render() {
        
        return (
            <Aux>
                <Row className="ml-5 mr-5 mt-3 mb-3">
                    <Col sm={12} md={6} xs={6} lg={4} className="creation_round mt-2">
                        <Row>
                            <div className="manually p-4 ml-2">
                            </div>
                            <div className="ml-3 pt-3 text-center">
                                <h5 className="import_text">IMPORT LEADS MANUALLY</h5>   
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={6}  xs={6} lg={4} className="creation_round mt-2">
                        <Row>
                            <div className="csv p-4 ml-2">
                            </div>
                            <div className="ml-3 pt-3 text-center">
                                <h4 className="import_text">IMPORT A CSV FILE</h4>   
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} xs={6} lg={4} className="mt-2">
                        <Row>
                            <div className="source p-4 ml-2">
                            </div>
                            <div className="ml-3 pt-3 text-center">
                                <h4 className="import_text pr-3">IMPORT FROM A SOURCE</h4>   
                            </div>
                        </Row>
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={4} md={4} lg={3} className="pt-2 mt-2">
                        <Form.Control className="ml-3" type="text" placeholder="Search" />
                    </Col>
                    <Col sm={8} md={8} lg={9} className="mt-2">
                        <Row className="float-right">
                                <ButtonToolbar>
                                    {splitDropdownButton}
                                </ButtonToolbar>
                                <button className="btn-rounded btn btn-secondary" onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>add</button>
                                <button className="btn-rounded btn btn-secondary">Edit</button>
                                <button className="btn-rounded btn btn-secondary">See</button>
                            
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-scroll">
                            <thead>
                            <tr>
                                <th>NO</th>
                                <th>CREATION DATE</th>
                                <th>NAME</th>
                                <th>EMAIL ADDRESS</th>
                                <th>PHONE NUMBER</th>
                                <th>COMPANY NAME</th>
                                <th>NATRIMONY</th>
                                <th>ENGINE CC</th>
                                <th>CAR CHACHIS NO</th>
                                <th>LEAD STATUS</th>
                                <th>LEAD OWNERSHIP</th>
                                <th>LAST ACTIVITY</th>
                            </tr>
                            </thead>
                            
                        </Table>
                
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Modal size={"lg"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                            <Modal.Body>
                                <Row>
                                    <div className="w-100 text-center">
                                         <h3>LEAD FILTER</h3>
                                    </div>
                                    
                                </Row>
                                <Row className="modal_header pb-3">
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={6}>
                                        <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    
                                    </Col>
                                    <Col sm={1}>
                                    <Button variant="primary" className="btn_modal_add btn-rounded btn btn-secondary" onClick={() => this.setState({  })}>add</Button>
                                    </Col>
                                </Row>
                                <Row className="pl-5 pr-5">
                                     <Col sm={6} lg={3} className="mt-3">
                                         <h6>CREATION DATE</h6>
                                        <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                    <Col sm={6} lg={3} className="mt-3">
                                        <h6>TO</h6>
                                        <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                    <Col sm={6} lg={3} className="mt-3">
                                        <h6>LAST ACTIVITY DATES</h6>
                                        <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                    <Col sm={6} lg={3} className="mt-3">
                                        <h6>TO</h6>
                                        <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                </Row>
                                <Row className="pt-3 pl-5 pr-5">
                                    <Col sm={6}>
                                        <h6>TYPE OF ACTIVITY</h6>
                                         <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                    <Col sm={6}>
                                        <h6>LEAD OWNER</h6>
                                         <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                </Row>
                                <Row className="pt-3 pl-5 pr-5">
                                    <Col sm={6}>
                                        <h6>NAME</h6>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Col>
                                    <Col sm={6}>
                                        <h6>LEAD SOURCE</h6>
                                         <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                </Row>
                                <Row className="pt-3 pl-5 pr-5">
                                    <Col sm={6}>
                                        <h6>TAGS</h6>
                                        <Form.Control type="text" placeholder="Tags" />
                                    </Col>
                                    <Col sm={6}>
                                        <h6>LEAD STATUS</h6>
                                         <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={colourOptions[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                    </Col>
                                </Row>
                                
                            </Modal.Body>
                            <Modal.Footer>
                                <Row className="w-100">
                                    <Col sm={5} md={5} lg={6} className="pr-5">
                                         <Form.Control className="ml-3" type="text" placeholder="NAME YOUR FILTER" />
                                    </Col>
                                    <Col sm={7} md={7} lg={6}>
                                        <button className="btn-glow-dark btn btn-dark">Save & Filter</button>
                                        <button className="btn-glow-dark btn-rounded btn btn-dark" onClick={() => this.setState({ isVarying: false })}>CLEAR</button>
                                    </Col>
                                </Row>
                               
                            </Modal.Footer>
                        </Modal>
                      
                    </Col>
                </Row>
               
            </Aux>
        );
    }
}

export default Lead;