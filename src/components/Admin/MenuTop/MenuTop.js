import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import WebLogo from '../../../assets/img/png/logo_oceano_azul-100.png'

import './MenuTop.scss';

export default function MenuTop(props) {
    const { setMenuCollapsed, menuCollapsed } = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/admin"}>
                    <img
                        className="menu-top__left-logo"
                        src={WebLogo}
                        alt="Logo de la Web"
                    />
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Desconexión.")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}