import React from 'react';
import {
    Layout
} from 'antd';

const { Header, Footer, Content } = Layout;

const basePageHOC = (PageComponent) => {

    const Wrap = () => {

        return (
            <Layout>
                <Header/>
                <Content
                    style={{
                        padding: 16
                    }}
                >
                    <PageComponent/>
                </Content>
                <Footer>
                    This is Footer
                </Footer>
            </Layout>
        );

    }

    return Wrap;

};

export default basePageHOC;
