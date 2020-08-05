import React, { Component } from "react";
import Forms from "../components/Forms"
import ConfigData from "../jsonTests/test3.json" // change this to switch the dynamic form config

class Formpage extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handler = this.handler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getParentStateValue = this.getParentStateValue.bind(this);
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
        const name = event.target.name;
        // this is so checkboxes can be toggled on and off
        if(event.target.type === "checkbox" && this.state[name] !== " "){ 
            this.setState({[name] : " "})
        }else{
            this.setState({[name] : event.target.value});
        }
    };

    getParentStateValue = (name) => {
        if (name in this.state){
            return this.state[name];
        }
        return null;
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
                            getParentStateValue={this.getParentStateValue}
                            containsConditional={("conditional" in configDetail)? true : false}
                            />
                })}
                <button type="button" onClick={() => this.submitButton()}>SUBMIT</button>
            </div>
        );
    
    }


}
export default Formpage;