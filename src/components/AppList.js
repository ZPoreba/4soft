import React, { Component } from "react";
import AppDataService from "../services/AppDataService";
import {List} from "antd";

export default class AppList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        }
    }

    componentDidMount() {
        AppDataService.getListData().then(response => {
            this.setState({data: response.data})
        }, error => {

        })
    }

    render() {
        return (
            <div>
                <h1>Available Apps</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    pagination={{
                        pageSize: 5,
                    }}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<p>{item.name}</p>}
                                description={<p>{item.company}</p>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}