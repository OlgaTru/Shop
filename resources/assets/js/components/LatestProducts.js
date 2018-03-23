import React, {Component} from 'react';
import axios from 'axios';
import {ProductTile} from "./ProductTile";




export class DisplayProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.productTiles =this.productTiles.bind(this);
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productTiles(){
        if ((this.state.products instanceof Array)) {
            return this.state.products
                .filter(function (object) {
                    return object.visibility && object.stock_status;
                })
                .map(function (object, i) {
                    return <ProductTile obj={object} key={i}/>;
                })
        }
    }

    render(){
        let data = this.productTiles();
        // var now = new Date().toISOString() ;
        // alert( now);

        console.log(data);


        return (
            <div className="row">
                {data.map((product, index) =>
                    <div className="col-md-3" key={index}>{product}</div>)
                }
            </div>
        )
    }
}