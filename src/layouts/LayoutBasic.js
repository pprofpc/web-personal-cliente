import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
    const { children } = props;
    const { Content, Footer} = Layout;

    return (
        <Layout>
            <h2> Menu Sider</h2>
            <Layout>
                <Content> {children} </Content>
                <Footer>Footer...</Footer>
            </Layout>
        
        </Layout>
    );
}