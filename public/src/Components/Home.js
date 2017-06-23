import React, { Component } from 'react';
import HomeVideo from './HomeVideo';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <HomeVideo />
            </div>
        )
    }
}
