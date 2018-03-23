import React, {Component} from 'react';
import axios from 'axios';
import {CategoryContent} from "./CategoryContent";



export class DisplayCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {categories: []};
        this.categoriesContent =this.categoriesContent.bind(this);
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/categories')
            .then(response => {
                this.setState({ categories: response.data });
                /*console.log(response.data);*/

            })
            .catch(function (error) {
                console.log(error);
            })

    }

    categoriesContent(){
        if(this.state.categories instanceof Array){
            return this.state.categories
                .filter(function(object) {
                    return object.visibility;
                })
                .map(function(object, i) {
                    return <CategoryContent obj={object} key={i}/>;
                })
        }
    }


    render(){
        let data = this.categoriesContent();
       /* console.log(data);*/
        return (
            <div className="row">

                {data.map((category, index) =>
                    <div className="col-md-3" key={index}>{category}</div>)
                }

            </div>
        )
    }
}

