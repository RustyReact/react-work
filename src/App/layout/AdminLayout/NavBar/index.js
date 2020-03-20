import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import {Row,Col,Dropdown, OverlayTrigger, Popover} from 'react-bootstrap';
import windowSize from 'react-window-size';
import './../../../../assets/scss/manage/style.scss';
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";
import * as actionTypes from "../../../../store/actions";
import Avatar1 from '../../../../assets/images/user/avatar-1.jpg';

class NavBar extends Component {
    render() {
        let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', this.props.headerBackColor];
        if (this.props.headerFixedLayout) {
            headerClass = [...headerClass, 'headerpos-fixed'];
        }

        let toggleClass = ['mobile-menu'];
        if (this.props.collapseMenu) {
            toggleClass = [...toggleClass, 'on'];
        }

        let iconFullScreen = ['feather'];
        iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }

        return (
            <Aux>
                <header className={headerClass.join(' ')}>
                    <div className="m-header">
                        <a className={toggleClass.join(' ')} id="mobile-collapse1" href={DEMO.BLANK_LINK} onClick={this.props.onToggleNavigation}><span/></a>
                        <a href={DEMO.BLANK_LINK} className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"/>
                            </div>
                            <span className="b-title">Ultconnect</span>
                        </a>
                    </div>
                    <a className="mobile-menu" id="mobile-header" href={DEMO.BLANK_LINK}><i className="feather icon-more-horizontal"/></a>
                    <div style={{backgroundColor:'white', width:'100%'}}>
                        <Row>
                            <Col sm={12} md={12} lg={7}>
                                <Row className="ml-2">
                                    <ul className="navbar-nav mr-auto">
                                        <li className={navItemClass.join(' ')}>
                                            <Dropdown alignRight={dropdownRightAlign}  >
                                                <Dropdown.Toggle variant={'link'} id="dropdown-basic" style={{}}>
                                                    Branch Status
                                                </Dropdown.Toggle>
                                                <ul>
                                                    <Dropdown.Menu>
                                                        <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Action</a></li>
                                                        <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Another action</a></li>
                                                        <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Something else here</a></li>
                                                    </Dropdown.Menu>
                                                </ul>
                                            </Dropdown>
                                        </li>
                                        
                                    </ul>
                                </Row>
                                <Row style={{border:"2px solid gray",borderRadius:3+"rem"}} className="ml-3 align-items-center pl-3 pr-3 pt-3">
                                    <Col xs={6} sm={6} md={3} lg={2} className="text-center align-items-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Inbound IVR</span>
                                        <p style={{paddingRight:1+"rem"}}>1800</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={1} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Instant</span>
                                        <p style={{paddingRight:0.5+"rem"}}>25</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={2} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Instant-Q</span>
                                        <p style={{paddingRight:1+"rem"}}>180</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={2} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Instant-EVE</span>
                                        <p style={{paddingRight:1+"rem"}}>25</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={2} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Drip Dial</span>
                                        <p style={{paddingRight:1+"rem"}}>180</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={1} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue', borderRight:"2px solid gray",paddingRight:1+"rem"}}>Dial-Q</span>
                                        <p style={{paddingRight:1+"rem"}}>25</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={3} lg={2} className="text-center pl-0 pr-0">
                                        <span style={{color:'blue'}}>Predictive Dialer</span>
                                        <p style={{paddingRight:1+"rem"}}>25</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6} md={6} lg={2}>
                                <Row className="mt-5 pt-4 pl-5 text-center">
                                    <Col sm={6}  md={6} lg={6}>
                                        <div>
                                            <i style={{fontSize:3+'rem'}} className="icon feather icon-mail"></i>
                                            {/* <img src={edit} width={'100%'} /> */}
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6} lg={6}>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement='bottom'
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`} title={`Popover on bottom`}>
                                                    <div className="mt-3 text-right pr-5">
                                                        <label>DISMISS ALL</label>
                                                    </div>
                                                    <Row className="mt-3">
                                                        <Col >
                                                            <label className="font_large ml-3">ADI-TASK NAME 1</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <button className="btn_message">New Message</button>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <label className="pl-3">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lprem
                                                        has been the industry's 
                                                    </label>
                                                    <Row className="mt-1">
                                                        <Col >
                                                            <label className="font_small ml-3">22 aug 2019 | 2:05AM</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <label className="font_small">DISMISS</label>
                                                        </Col>
                                                        
                                                    </Row>

                                                    <Row className="mt-3">
                                                        <Col >
                                                            <label className="font_large ml-3">ADI-TASK NAME 1</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <button className="btn_message">TASK</button>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <label className="pl-3">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lprem
                                                        has been the industry's 
                                                    </label>
                                                    <Row className="mt-1">
                                                        <Col >
                                                            <label className="font_small ml-3">22 aug 2019 | 2:05AM</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <label className="font_small">DISMISS</label>
                                                        </Col>
                                                        
                                                    </Row>

                                                    <Row className="mt-3">
                                                        <Col >
                                                            <label className="font_large ml-3">ADI-TASK NAME 1</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <button className="btn_message">Missed Call</button>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <label className="pl-3">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lprem
                                                        has been the industry's 
                                                    </label>
                                                    <Row className="mt-1">
                                                        <Col >
                                                            <label className="font_small ml-3">22 aug 2019 | 2:05AM</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <label className="font_small">DISMISS</label>
                                                        </Col>
                                                        
                                                    </Row>

                                                    <Row className="mt-3">
                                                        <Col >
                                                            <label className="font_large ml-3">ADI-TASK NAME 1</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <button className="btn_message">New Voicemail</button>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <label className="pl-3">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lprem
                                                        has been the industry's 
                                                    </label>
                                                    <Row className="mt-1">
                                                        <Col >
                                                            <label className="font_small ml-3">22 aug 2019 | 2:05AM</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <label className="font_small">DISMISS</label>
                                                        </Col>
                                                        
                                                    </Row>
                                                    
                                                    <Row className="mt-3">
                                                        <Col >
                                                            <label className="font_large ml-3">ADI-TASK NAME 1</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <button className="btn_message">Email</button>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <label className="pl-3">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lprem
                                                        has been the industry's 
                                                    </label>
                                                    <Row className="mt-1">
                                                        <Col >
                                                            <label className="font_small ml-3">22 aug 2019 | 2:05AM</label>
                                                        </Col>
                                                        <Col className="text-right pr-5">
                                                            <label className="font_small">DISMISS</label>
                                                        </Col>
                                                        
                                                    </Row>
                                                </Popover>
                                            }
                                        >
                                            <div><i style={{fontSize:3+'rem'}} className="feather icon-bell"></i></div>
                                        </OverlayTrigger>
                                        
                                    </Col>
                                </Row>
                                
                                
                            </Col>
                            <Col sm={6} md={6} lg={2} className="pl-5">
                                <Row className="text-center">
                                    <Col sm={6} md={8} lg={8}>
                                        <h5 className="mt-4">Johnation Samuel</h5>
                                        <span style={{fontSize:'16px', backgroundColor:'#7a83de',border:"2px solid gray",borderRadius:3+"rem",color:'white'}}><i className="feather icon-bell"></i>123456789</span>
                                            
                                        <Dropdown className="drp-user" style={{width:'50%'}}>
                                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                                Busy
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu alignRight className="profile-notification">
                                                
                                                <ul className="pro-body">
                                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"> Settings</a></li>
                                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li>
                                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</a></li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        
                                    
                                    </Col>
                                    <Col sm={6} md={4} lg={4}>
                                        <img src={Avatar1} className="mt-4 img-responsive"></img>
                                    </Col>
                                </Row>
                                
                                
                            </Col>
                        </Row>
                        
                    </div>
                </header>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        rtlLayout: state.rtlLayout,
        headerBackColor: state.headerBackColor,
        headerFixedLayout: state.headerFixedLayout,
        collapseMenu: state.collapseMenu
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
