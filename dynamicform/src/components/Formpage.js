import React, { Component } from "react";
import Forms from "../components/Forms"
import ConfigData from "../jsonTests/test2.json" // change this to switch the dynamic form config

class Formpage extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handler = this.handler.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    // this returns the contents of the Form
    submitButton = () => {
        console.log(this.state);
        return this.state;
    };
    
    // sets state from child component Forms
    handler = (name, val) => {
        this.setState({[name] : val});
    };

    // handles onChange() changes
    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value});
    };

    render(){
        return(
            <div>
                {/*make sure the data is wrapped in []*/}
                { ConfigData.map((configDetail) => {
                    return <Forms 
                            config={configDetail} 
                            handler={this.handler}
                            handleChange={this.handleChange}
                            />
                })}
                <button type="button" onClick={() => this.submitButton()}>SUBMIT</button>
            </div>
        );
    
    }


}
export default Formpage;