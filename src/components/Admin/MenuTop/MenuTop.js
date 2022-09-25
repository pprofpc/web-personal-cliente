import React from "react";
import { Button } from "antd";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";
import WebLogo from '../../../assets/img/png/logo_oceano_azul-100.png'

import './MenuTop.scss';

export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={WebLogo}
                    alt="Logo de la Web"
                />
                <Button type="link" onClick={() => console.log("Me has clikeado!")}>
                    <MenuOutlined />
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