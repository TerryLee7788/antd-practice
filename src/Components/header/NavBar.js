import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import NavLink from './NavLink';

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
                    <NavLink
                        to="/"
                    >
                        <Icon type="home" />
                        <span>
                            Index
                        </span>
                    </NavLink>
                }
            >
            </SubMenu>
            <SubMenu
                title={
                    <NavLink
                        to="/DatePicker"
                    >
                        <Icon type="calendar" />
                        <span>
                            DatePicker
                        </span>
                    </NavLink>
                }
            >
            </SubMenu>
            <SubMenu
                title={
                    <NavLink
                        to="/Calendar"
                    >
                        <Icon type="calendar" />
                        <span>
                            CalendarPage
                        </span>
                    </NavLink>
                }
            >
            </SubMenu>
        </Menu>
    </Sider>
);

export default NavBar;
