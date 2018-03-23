import React from 'react';
import { Slider } from "../components/slider"
import {DisplayCategories} from "../components/DisplayCategories";
import {DisplayProducts} from "../components/DisplayProducts";






export class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row col-md-10 offset-md-1 ">
                    <Slider/>
                </div>
                <DisplayCategories />
                <h3 style={{fontFamily: 'Raleway', textAlign:'center'}}>Новинки</h3>
                <DisplayProducts />
            </div>
        )
    }
}
