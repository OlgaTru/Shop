import React, {Component} from 'react';
import LinesEllipsis from 'react-lines-ellipsis'

let imgStyle = {
    width: '200px',
    height: 'auto',
    align: 'center',
    resizeMode: 'contain',

};


export class CategoryContent extends Component {
    render(){

        return (
                <div className="card-body text-center">
                    <h4 className="card-title">{this.props.obj.name}</h4>
                    <h6 className="card-subtitle text-muted">Sun disappears!</h6>
                    <img src={this.props.obj.img} style={imgStyle} />
                    <LinesEllipsis className="card-text"
                        text={this.props.obj.description}
                        maxLine='7'
                        ellipsis={<span>...<a href="#">Подробнее</a></span>}
                        basedOn='letters'/>

                </div>
        )
    }

}