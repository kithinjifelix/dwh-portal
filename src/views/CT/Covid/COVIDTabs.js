import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Loadable from 'react-loadable';
import Loading from '../../Shared/Loading';
import { LOADING_DELAY } from '../../../constants';

const COVIDOverview = Loadable({ loader: () => import('./COVIDOverview'), loading: Loading, delay: LOADING_DELAY });
const COVIDAdultPLHIVVaccinatedByAge = Loadable({ loader: () => import('./COVIDAdultPLHIVVaccinatedByAge'), loading: Loading, delay: LOADING_DELAY });
const COVIDAdultPLHIVVaccinatedByGender = Loadable({ loader: () => import('./COVIDAdultPLHIVVaccinatedByGender'), loading: Loading, delay: LOADING_DELAY });

const COVIDTabs = () => {
    const [activeTab, setActiveTab] = useState('vaccination');

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === 'vaccination' })} onClick={() => { setActiveTab('vaccination') }}>VACCINATION</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={classnames({ active: activeTab === 'infection&Outcomes' })} onClick={() => { setActiveTab('infection&Outcomes') }}>INFECTIONS & OUTCOMES</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="vaccination">
                    <Row>
                        <Col className={"col-12"}>
                            <COVIDOverview />
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"col-6"}>
                            <COVIDAdultPLHIVVaccinatedByGender />
                        </Col>
                        <Col className={"col-6"}>
                            <COVIDAdultPLHIVVaccinatedByAge />
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="infection&Outcomes">

                </TabPane>
            </TabContent>
        </div>
    );
};

export default COVIDTabs;