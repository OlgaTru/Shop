import React, {Component} from 'react';



const SLIDERIMGPATH = [
    'https://placeimg.com/1000/300/arch/grayscale',
    'https://placeimg.com/1000/300/animals/grayscale',
    'https://placeimg.com/1000/300/people/grayscale',
];

export class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = { currentImg: 0 };
        this.interval = null;
        this.nextImg = this.nextImg.bind(this);
    }

    nextImg() {
        let current = this.state.currentImg;
        let next = ++current % SLIDERIMGPATH.length;
        this.setState({ currentImg: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImg, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let src = SLIDERIMGPATH[this.state.currentImg];
        return <img src={src} />;
    }
}