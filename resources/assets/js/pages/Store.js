import React from 'react';
import {DisplayProducts} from "../components/DisplayProducts";
import {StoreSidebar} from "../components/StoreSidebar";

export class Store extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <StoreSidebar/>
                    </div>
                    <div className="col-md-10">
                        <DisplayProducts/>
                    </div>
                </div>
            </div>
        )
    }
}