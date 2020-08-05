import React, { Component } from "react";

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <label>{this.props.config.human_label}</label>
                <input
                    type={this.props.config.type}
                    name={this.props.config.name}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    
    }


}

export default Forms;