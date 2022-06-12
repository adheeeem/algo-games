import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {} 

    getValue = (val) => {
        console.log(val);
    }
    render() { 
        return (
            <Child getChildValue={this.getValue}/>
        );
    }
}
 
export default Parent;