import React, { Fragment, Component } from 'react';
import {
    Layout
} from 'antd';

const { Header, Footer } = Layout;

const basePageHOC = (PageComponent) => {

    class Wrap extends Component {

        render () {

            return (
                <Fragment>
                    <Header/>
                    <PageComponent/>
                    <Footer>
                        This is Footer
                    </Footer>
                </Fragment>
            );

        }

    }

    return Wrap;

};

export default basePageHOC;
