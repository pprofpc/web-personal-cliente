import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
    const { children } = props;
    console.log(props);
    return (
        <Layout>
        <h2> Menu Sider</h2>
        <div>Contenido...</div>
        <h3>Footer...</h3>

        {children}
        </Layout>
    );
}