import React, {Component} from 'react';

let imgStyle = {
    width: '200px',
    height: 'auto',
    align: 'center',
    resizeMode: 'contain',
    padding: '5px 0px',

};


export class ProductTile extends Component {
    render(){
        return (
            <div className="card-body text-center">
                <h5 className="card-title">{this.props.obj.name}</h5>
                <h6 className="card-subtitle text-muted">{this.props.obj.price} грн.</h6>
                <img src={this.props.obj.main_img_url} style={imgStyle}/>
                <button type="button" className="btn btn-secondary btn-sm"><i className="fa fa-shopping-bag fa-md"/> Добавить в корзину</button>
                {/*<p className="card-text">{this.props.obj.stock_status}</p>*/}
                <br/>

            </div>
        )
    }

}