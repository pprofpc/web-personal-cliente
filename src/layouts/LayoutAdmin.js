import React from "react";
import { Layout } from "antd";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    console.log(props);
    return (
        <Layout>
            {/* TO DO: Menu Sider */}
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    {/* TO DO: Menu Top */}
                </Header>
                <Content className="layout-admin__content">{children}</Content>
                <Footer className="layout-admin__footer">Footer: pprofpc</Footer>
            </Layout>
        </Layout>
    );
}