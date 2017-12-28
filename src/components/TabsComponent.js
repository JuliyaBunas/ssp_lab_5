import React, { Component } from "react";
import {Tab} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



class TabsComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isEditMain: true,
            isEditStudy: true,
            isEditContact: true,

        };
    }
        render() {

            let disableEditMain= ()=>{
                if(this.state.isEditMain){
                    this.setState({
                        isEditMain: false,
                    })
                }else{
                    this.setState({
                        isEditMain: true,
                    })
                }
            };
            let disableEditStudy= ()=>{
                if(this.state.isEditStudy){
                    this.setState({
                        isEditStudy: false,
                    })
                }else{
                    this.setState({
                        isEditStudy: true,
                    })
                }
            };
            let disableEditContact= ()=>{
                if(this.state.isEditContact){
                    this.setState({
                        isEditContact: false,
                    })
                }else{
                    this.setState({
                        isEditContact: true,
                    })
                }
            };
            const panels = [
                { menuItem: 'Основное', render: () => <Tab.Pane attached={false}>
                        <div style={{padding:'5px'}}>
                            <button style={{position: 'relative',padding:'5px',right: '0'}} className="ui primary button" onClick={disableEditMain}>
                                Edit
                            </button>
                        </div>
                        <div style={{padding:'5px'}}>
                    <textarea style={{width:'100%',hight:'100%', overflow:'auto', padding:'5px'}} disabled={this.state.isEditMain}>
                    </textarea>
                        </div>
                    </Tab.Pane> },
                { menuItem: 'Образование', render: () => <Tab.Pane attached={false}>
                        <div style={{padding:'5px'}}>
                            <button style={{position: 'relative',padding:'5px',right: '0'}} className="ui primary button" onClick={disableEditStudy}>
                                Edit
                            </button>
                        </div>
                        <div style={{padding:'5px'}}>
                <textarea style={{width:'100%',hight:'100%', overflow:'auto', padding:'5px'}} disabled={this.state.isEditStudy}>
            </textarea>
                        </div>
                    </Tab.Pane> },
                { menuItem: 'Контакты', render: () => <Tab.Pane attached={false}>
                        <div style={{padding:'5px'}}>
                            <button style={{position: 'relative',padding:'5px',right: '0'}} className="ui primary button" onClick={disableEditContact}>
                                Edit
                            </button>
                        </div>
                        <div style={{padding:'5px'}}>
                <textarea style={{width:'100%',hight:'100%', overflow:'auto', padding:'5px'}} disabled={this.state.isEditContact}>
            </textarea>
                        </div>
                    </Tab.Pane> },
            ];



            return (
                <Tab menu={{ secondary: true, pointing: true }} panes={panels} />    );
        }
}

export default TabsComponent;