import React from 'react';
import {Row, Col, Modal, Tabs, Tab, Form} from 'react-bootstrap';
import FullCalendar from 'fullcalendar-reactwrapper';
import Select from 'react-select';
import { format } from 'date-fns'

import Aux from "../../hoc/_Aux";
import Slider  from 'rc-slider';
import './../../assets/scss/campaign/style.scss';
import add from '../../assets/images/add.png';

export const colourOptions = [
    { value: 'email address', label: 'Email Address', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

export const month = [
    { value: '01', label: '01', color: '#00B8D9' },
    { value: '02', label: '02', color: '#0052CC' },
    { value: '03', label: '03', color: '#5243AA' },
    { value: '04', label: '04', color: '#FF5630', isFixed: true },
    
];

export const day = [
    { value: 'email address', label: 'Email Address', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

export const time = [
    { value: 'email address', label: 'Email Address', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    
];

class Task extends React.Component {

    constructor(props) {
        super(props);
        let date = format(new Date(), 'YYYY-MM-DD');
        console.log(date);
        this.state = {
            today: '2018-08-12',
            events:[
                {
                    title: 'All Day Event',
                    start: '2018-08-01',
                    borderColor: '#04a9f5',
                    backgroundColor: '#04a9f5',
                    textColor: '#fff'
                }, {
                    title: 'Long Event',
                    start: '2018-08-07',
                    end: '2018-08-10',
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-08-09T16:00:00',
                    borderColor: '#f4c22b',
                    backgroundColor: '#f4c22b',
                    textColor: '#fff'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-08-16T16:00:00',
                    borderColor: '#3ebfea',
                    backgroundColor: '#3ebfea',
                    textColor: '#fff'
                }, {
                    title: 'Conference',
                    start: '2018-08-11',
                    end: '2018-08-13',
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                }, {
                    title: 'Meeting',
                    start: '2018-08-12T10:30:00',
                    end: '2018-08-12T12:30:00'
                }, {
                    title: 'Lunch',
                    start: '2018-08-12T12:00:00',
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                }, {
                    title: 'Happy Hour',
                    start: '2018-08-12T17:30:00',
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }, {
                    title: 'Birthday Party',
                    start: '2018-08-13T07:00:00'
                }, {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-08-28',
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }
            ]
        };
    }


    render() {
        return (
            <Aux>
                <div>
                    <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                        <Tab eventKey="home" title="UPCOMING TASKS">
                            <Row>
                                <Col lg={6}>
                                    <div className="flex-row">
                                        <Select
                                            className="basic-single w-25"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                        <Select
                                            className="basic-single w-25 ml-3"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                        <Select
                                            className="basic-single ml-3 w-25"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                    </div>
                                    
                                </Col>
                                
                            </Row>
                            <span className="pb-3 font_small">PLEASE SELECT A BRANCH AND TEAM TO VIEW UPCOMING TASKS</span><br/><br/>
                             <FullCalendar
                                id = "datta-calendar"
                                className='calendar'
                                header = {{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'month'
                                }}
                                defaultDate={this.state.today}
                                navLinks= {true}
                                editable= {true}
                                eventLimit= {true}
                                events = {this.state.events}
                            />
                                 
                            <div className="mt-3 text-center">
                                <img width={'3%'} src={add} onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}></img>
                                <h3 className="mt-2">ADD YOUR TASK</h3>
                            </div>
                            <div>
                            <Modal size={"md"} show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className="text-center">
                                        <label className="font_large">TASK CREATION</label>
                                    </div>
                                    <div className="pl-4">
                                        <label>TASK NAME</label><br></br>
                                        <Form.Control type="text" className="w-75" placeholder="NAME" />
                                    </div>
                                    <div className="mt-2 pl-4">
                                        <div>
                                            <label>TASK DATE</label>
                                        </div>
                                        <div className="flex-row">
                                            <Select
                                                className="basic-single w-25"
                                                classNamePrefix="select"
                                                defaultValue={month[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single ml-3 w-25"
                                                classNamePrefix="select"
                                                defaultValue={day[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                            <Select
                                                className="basic-single ml-3 w-25"
                                                classNamePrefix="select"
                                                defaultValue={time[0]}
                                                name="color"
                                                options={colourOptions}
                                            />
                                        </div>
                                    </div>
                                   
                                    <div className="ml-4 mt-4">
                                        <label>TASK ADDED BY</label>
                                        <Select
                                            className="basic-single w-75"
                                            classNamePrefix="select"
                                            defaultValue={time[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                    </div>
                                  
                                    <div className="mt-2 pl-4 w-75 pb-4">
                                        <label className="font-black mt-1 ml-2">LOCATION</label><br></br>
                                        <Form.Control type="text" className="mt-1" placeholder="GOOGLE MAP API" />
                                    </div>

                                    <div className="mt-2 pl-4 pr-4 pb-4">
                                        <label className="font-black mt-1 ml-2">DESCRIPTION</label><br></br>
                                        <Form.Control as="textarea" rows="3"  className="mt-1"  placeholder="TASK DESCRIPTION" />
                                    </div>

                                    <div className="pl-4 mt-4">
                                        <label>INVITE GUESTS</label>
                                        <div className="flex-row">
                                            <Form.Control type="text" className="w-75" placeholder="EMAIL ADDRESS" />
                                            <img width={'35px'} className="ml-2" src={add}></img>
                                        </div>
                                        
                                    </div>
                                 
                                    <div className="mt-3 text-center">
                                        <button className="btn_cancel p-2 text-white" onClick={() => this.setState({ isVarying: false })}>CANCEL</button>
                                        <button className="btn_save ml-2 pl-3 pr-3 pt-2 pb-2 text-white">SAVE</button>
                                    </div>
                                </Modal.Body>
                                
                            </Modal>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="PAST DUE TASKS">
                            <div className="mt-3 ml-3 mr-3">
                                
                                <div className="mt-3 text-center">
                                    <a href=""><img width={'4%'} src={add}></img></a>
                                    <h3 className="mt-2">ADD CAMPAIGN</h3>
                                </div>
                                
                            </div>
                        </Tab>
                        
                    </Tabs>

                </div>
                
            </Aux>
        );
    }
}

export default Task;