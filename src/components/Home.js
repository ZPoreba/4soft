import React, { Component } from "react";
import AppList from "./AppList";
import {Col, Row} from "antd";
import AppGrid from "./AppGrid";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <AppList/>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <AppGrid />
                </Row>
            </div>
        )
    }
}
