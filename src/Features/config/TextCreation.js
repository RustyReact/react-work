import React, {Component} from 'react';
import {Row, Col, Form, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import {NavLink} from 'react-router-dom';
import AllCkEditor from "../../App/components/AllCkEditor";
import './../../assets/scss/config/style.scss';
import Select from 'react-select';
import JoditEditor from "jodit-react";
import './../../assets/scss/config/style.scss';
import add from '../../assets/images/add.png';

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

class TextCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello...',
        }
    }

    render() {
        const html = `<h3>Walking the capitals of Europe: Warsaw</h3>
            <figure class="image image-style-side">
                <img alt="Picture of the Warsaw Old Town." src="https://ckeditor.com/assets/images/bg/umbrellas-e935d5c582.jpg" />
                <figcaption>Medieval Old Town square, destroyed in 1944 & rebuilt after WWII.</figcaption>
            </figure>
            <p>If you enjoyed my previous articles in which we discussed wandering around <a href="#!" target="_blank" rel="noopener">Copenhagen</a> and <a href="#!" target="_blank" rel="noopener">Vilnius</a>, you’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw" target="_blank" rel="noopener">Warsaw</a>.</p>
            <h3>Time to put comfy sandals on!</h3>
            <p>Best time to visit the city is July and August, when it’s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river of Vistula.</p>
            <p>The historic <strong>Old Town</strong>, which was reconstructed after the World War II, with its late 18th century characteristics, is a must-see. You can start your walk from the <strong>Nowy Świat Street</strong> which will take you straight to the Old Town.</p>
            <p>Then you can go to the <strong>Powiśle</strong> area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p>
            <p>For museum lovers, you can add these to your list:</p>
            <ul>
                <li>POLIN</li>
                <li>Warsaw Uprising Museum</li>
                <li>Fryderyk Chopin Museum</li>
            </ul>
            <h3>Next destination</h3>
            <p>We will go to Berlin and have a night's walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>
            <div>
                    <button>SMS</button>
                    <button>SMS</button>
                
            </div>
            `;

        return (
            <Aux>
                <div>
                    <Row className="ml-1">
                        <button className="btn_email_template btn p-2">EMAIL TEMPLATE</button>
                        <button className="btn_text_temp btn p-2 ml-3">TEXT TEMPLATE</button>
                        <button className="btn_script_temp btn p-2 ml-3">SCRIPT TEMPLATE</button>
                    </Row>
                </div>
                <div className="mt-2">

                    <h3 className="text_creation_header">TEXT TEMPLATE CREATION</h3>
                    <div>
                         <Form.Label>NAME TEXT TEMPLATE</Form.Label>
                    </div>
                    <div>
                        <Row>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Control type="text" placeholder="" />
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                                <Form.Label className="float-right">TEMPLATE CREATION DATE 27/15/2019</Form.Label>
                            </Col>
                        </Row>
                    </div>
                    
                </div>
                <div className="mt-2">
                    <Row>
                        <Col sm={6} md={4} lg={4}>
                            <Row>
                                <div className="ml-3">
                                    <Form.Label>LEAD VARIABLE</Form.Label>
                                </div>
                                {/* <div className="w-100 text-right">
                                    <h6 className="text-right" style={{borderRadius:'1rem',background:'brown'}}>dsf</h6>
                                </div> */}
                            </Row>
                            <Row>
                                <Col sm={9} md={9} lg={10}>
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                                <Col sm={3} md={3} lg={2}>
                                      <img className="" width={'80%'} src={add}></img>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <Row>
                                <div className="ml-4">
                                    <Form.Label>USER VARIABLE</Form.Label>
                                </div>
                            </Row>
                            <Row>
                                <Col sm={9} md={9} lg={10}>
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                                <Col sm={3} md={3} lg={2}>
                                      <img className="" width={'80%'} src={add}></img>
                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <Row>
                                <div className="ml-3">
                                    <Form.Label>BRANCH VARIABLE</Form.Label>
                                </div>
                            </Row>
                            <Row>
                                <Col sm={9} md={9} lg={10}>
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colourOptions[0]}
                                            name="color"
                                            options={colourOptions}
                                        />
                                </Col>
                                <Col sm={3} md={3} lg={2}>
                                      <img className="" width={'80%'} src={add}></img>
                                </Col>
                            </Row>
                            
                        </Col>
                       
                    </Row>
                </div>
                <div className="mt-3">
                    <Card>
                        <Card.Body>
                             <AllCkEditor html={html} editor='balloon'/>
                        </Card.Body>
                    </Card>
                </div>
                <div className="mt-3 text-right">
                    <button type="button" class="btn btn-secondary">CANCEL</button>
                    <button type="button" class="btn btn-secondary btn-dark">SAVE</button>
                </div>
                
            </Aux>
        );
    }
}

export default TextCreation;