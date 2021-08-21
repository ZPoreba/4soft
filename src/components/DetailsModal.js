import React, { Component } from "react";
import {Button, Modal} from "antd";
import AppDataService from "../services/AppDataService";


export default class DetailsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData: undefined,
            appId: undefined
        }
    }

    setModal(appId) {
        AppDataService.getAppDetails(appId).then(
            response => {
                this.setState({appData: response.data, appId: appId})
            },
            error => {

            })
    }

    handleClose = () => {
        this.setState({
            appData: undefined,
            appId: undefined
        })
    }

    refreshData = () => {
        this.setModal(this.state.appId);
    }

    render() {
        return (
            <Modal
                visible={this.state.appData}
                onCancel={this.handleClose}
                footer={null}
            >
                {
                    this.state.appData &&
                    <div>
                        <div>Name: {this.state.appData.name}</div>
                        <div>Company: {this.state.appData.company}</div>
                        <div>Number of users: {this.state.appData.number_of_users}</div>
                        <div>Number of active users: {this.state.appData.number_of_active_users}</div>
                        <div>Server address: {this.state.appData.server_address}</div>
                        <div>Admin: {this.state.appData.admin.first_name} {this.state.appData.admin.last_name}</div>
                        <div>Admin Email: {this.state.appData.admin.email}</div>
                        <br/>
                        <Button onClick={this.refreshData}>Refresh Data</Button>
                    </div>
                }
            </Modal>

        )
    }
}
