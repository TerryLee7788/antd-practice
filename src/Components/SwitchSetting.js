import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import {
    Layout
} from 'antd';

import NavBar from './header/NavBar';
import Index from '../pages/Index';
import DatepickPage from '../pages/DatepickPage';
import CalendarPage from '../pages/CalendarPage';
import TablePage from '../pages/TablePage';

const { Content } = Layout;

const SwitchSetting = () => {

    return (
        <BrowserRouter>
            <Layout
                style={{ minHeight: '100vh' }}
            >
                <NavBar/>
                <Content>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/DatePicker" component={DatepickPage} />
                        <Route exact path="/Calendar" component={CalendarPage} />
                        <Route exact path="/Table" component={TablePage} />
                    </Switch>
                </Content>
            </Layout>
        </BrowserRouter>
    );

};

export default SwitchSetting;
