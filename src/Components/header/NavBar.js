import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom';

import './NavBar.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

const NavBar = () => (
    <Sider
        className="my-sider"
    >
        <Menu
            theme="dark"
        >
            <SubMenu
                title={
                    <Link
                        to="/"
                    >
                        <Icon type="home" />
                        <span>
                            Index
                        </span>
                    </Link>
                }
            >
            </SubMenu>
            <SubMenu
                title={
                    <Link
                        to="/DatePicker"
                    >
                        <Icon type="calendar" />
                        <span>
                            DatePicker
                        </span>
                    </Link>
                }
            >
            </SubMenu>
        </Menu>
    </Sider>
);

export default NavBar;
