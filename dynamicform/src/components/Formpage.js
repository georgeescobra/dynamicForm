import React, { Component } from "react";
import Forms from "../components/Forms"
import ConfigData from "../jsonTests/test1.json"

class Formpage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                {/*make sure the data is wrapped in []*/}
                { ConfigData.map((configDetail) => {
                    return <Forms config={configDetail} />
                })}
            </div>
        );
    
    }


}
export default Formpage;