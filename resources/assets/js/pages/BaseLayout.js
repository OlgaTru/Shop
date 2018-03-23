import React from 'react';
import {Footer} from "../components/Footer";
import { Navbar } from '../components/Navbar';



export class BaseLayout extends React.Component {
    render(){
        return (
            <div>
                <div className="container-fluid">
                    <Navbar/>
                    {this.props.children}
                </div>
                {/*<Footer/>*/}
            </div>
        )
    }
}

