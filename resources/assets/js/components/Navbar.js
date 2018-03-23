import React from 'react';
import {  Link } from 'react-router';

export class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-faded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <a className="navbar-brand" href="#">Logo</a>

                <div className="collapse navbar-collapse justify-content-end" id="nav-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/store" className="nav-link">Магазин</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">О нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Контакты</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            )
        }
    }


           /* <div className="container">
            <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">AppDividend</a>
            </div>
            <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-item">Create Item</Link></li>
        <li><Link to="/display-item">Display Item</Link></li>
        </ul>
        </div>
        </nav>

        </div>*/
