import GiantHeader from '../components/giantHeader'
import React, { Component } from 'react'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <GiantHeader />
        );
    }
}

export default HomePage;