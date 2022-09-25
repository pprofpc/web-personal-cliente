import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    console.log(props);
    return (
        <Layout>
            <h2> Menu Sider</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>{children}</Content>
                <Footer>Footer: pprofpc</Footer>
            </Layout>
        </Layout>
    );
}