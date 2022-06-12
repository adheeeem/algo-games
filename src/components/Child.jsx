import React, { Component } from 'react';

class Child extends Component {
    state = { 
        value: 10,
    } 
    render() { 
        return (
            <button onClick={() => this.props.getChildValue(this.state.value)}>Child Button</button>
        );
    }
}
 
export default Child;   