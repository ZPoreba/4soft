import React, { Component } from "react";
import {Card, List} from "antd";
import AppDataService from "../services/AppDataService";
import DetailsModal from "./DetailsModal";



export default class AppGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appListData: undefined,
            modalVisible: false
        }
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        AppDataService.getListData().then(
            response => {
                this.setState({appListData: response.data})
            },
            error => {

            })
    }


    render() {
        return (
            <>
                <h1 style={{textAlign: 'center', width: '100%'}}>Apps Details</h1>
            <DetailsModal ref={this.modalRef} />
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.state.appListData}
                renderItem={item => (
                    <List.Item onClick={() => {
                        this.modalRef.current.setModal(item.id);
                    }}>
                        <Card>
                            <div>
                                <strong>Name:</strong> {item.name}
                            </div>
                            <div>
                                <strong>Company:</strong> {item.company}
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
            </>
        )
    }
}
