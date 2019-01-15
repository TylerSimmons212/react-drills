import React, {Component} from 'react';

class image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url}></img>
            </div>
        )
    }
}

export default image;