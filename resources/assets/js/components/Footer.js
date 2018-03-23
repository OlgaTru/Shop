import React, {Component} from 'react';

let footerStyle={
    paddingTop: '30px',
    backgroundColor: '#292c2f',
    color: '#bbb',
    position: 'fixed',
    bottom:0,
    width: '100%',
}

export class Footer extends Component{
    render(){

        return (

            <footer className="footer-inverse" style={footerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h5><i className="fa fa-pagelines"/> Logo</h5>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><a href="">Product</a></li>
                                        <li><a href="">Benefits</a></li>
                                        <li><a href="">Partners</a></li>
                                        <li><a href="">Team</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><a href="">Documentation</a></li>
                                        <li><a href="">Support</a></li>
                                        <li><a href="">Legal Terms</a></li>
                                        <li><a href="">About</a></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="nav">
                                <li className="nav-item"><a href="" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"/></a></li>
                                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"/></a></li>
                                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-google-plus fa-md"/></a></li>

                            </ul>
                            <br/>
                        </div>
                        <div className="col-md-3">
                            {/*<h5 className="text-md-right"></h5>
                            <hr/>*/}
                        </div>
                        <div className="col-md-4">
                            <form>
                                <fieldset className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ваш e-mail"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea className="form-control" id="exampleMessage" placeholder="Сообщение"/>
                                </fieldset>
                                <fieldset className="form-group text-xs-right">
                                    <button type="button" className="btn btn-secondary-outline btn-md">Отправить <i className="fa fa-paper-plane fa-sm"/></button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>


        )

    }
}
