import React, { Component } from "react";
import "./../css/icon.css"

class EditeComponent extends Component{

    constructor(props) {
        super(props);
        console.dir(this.state);
    }

    disableEditMain(e){
        this.setState({isEdit: !e.state.isEdit});
    }

    render() {
        return (
            <div>
                <div style={{padding:'5px'}}>
                    <button style={{position: 'relative',padding:'5px',right: '0'}} className="ui primary button" onClick={this.disableEditMain(this)}>
                        Edit
                    </button>
                </div>
                <div style={{padding:'5px'}}>
                    <textarea style={{width:'100%',hight:'100%', overflow:'auto', padding:'5px'}} disabled={this.state.isEdit}>
                    </textarea>
                </div>
            </div>
        );
    }
}

export default EditeComponent;