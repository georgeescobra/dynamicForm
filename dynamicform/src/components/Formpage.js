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
        for (const [key, values] of Object.entries(this.state)){
            console.log(key, " : ", values)
            // this is a naive approach to validating the data
            // but can expand this to do more
            /* if(value === " ") {
                had to take out because "parental_consent" is considered empty " "
                if time to implement:
                    - have to run the function conditional on the value and check if dob not empty
                    - if function() is true then parental_consent cant be " "
                    - if i can somehow check the component.hide value then i can bypass running the function again       
                alert("you have missing fields");
                break;
            }*/
        }
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

    // getter for child component
    getParentStateValue = (name) => {
        if (name in this.state){
            return this.state[name];
        }
        return null;
    };

    render(){
        return(
            <div style={{
                    backgroundColor:"#2b6b87",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "10px",
                    borderRadius : "10px",
                    padding: "10px",
                    minWidth : "80%"
                }}>

                {/* make sure the json data is wrapped in []
                    make sure the function is a string in json
                        - also make sure that the function contains no compile errors
                        - folow format in ../jsonTests/test.json
                */}
                { ConfigData.map((configDetail) => {
                    return <Forms 
                            config={configDetail} 
                            handler={this.handler}
                            handleChange={this.handleChange}
                            getParentStateValue={this.getParentStateValue}
                            containsConditional={("conditional" in configDetail)? true : false}
                            />
                })}
                <button style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                }}
                    type="button" 
                    onClick={() => this.submitButton()}>SUBMIT</button>
            </div>
        );
    
    }


}
export default Formpage;