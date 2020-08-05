import React, { Component } from "react";

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            hide : true,
        };
    }

    componentDidMount(){
        this.props.handler( this.props.config.name, " ");
    }

    render(){
        if(this.props.containsConditional){
            this.state.hide = false;
            const condFunc = new Function("value1", this.props.config.conditional.show_if); // creates the conditional function from the config
            // checks to see if form value was filled by user (for test3: date of birth)
            const val = this.props.getParentStateValue(this.props.config.conditional.name);
            if(val){
                this.state.hide = condFunc(val); // uses the value given by user and checks the condition
            }

        }
        return(
            <div>
                {   !! this.state.hide /* if hide is false, renders the form : if true, does not render*/
                    ?   <div>
                            <label>{this.props.config.human_label}</label>
                            <input
                                type={this.props.config.type}
                                name={this.props.config.name}
                                onChange={this.props.handleChange}
                            />
                        </div>
                    : <div />
                }
            </div>
        );
    }
}

export default Forms;