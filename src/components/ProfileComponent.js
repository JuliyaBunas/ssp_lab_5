import React, { Component } from "react";
import Img from 'react-image'
import data from "E:/react/lab4/src/json/data";
import ContactComponent from "./ContactComponnt"
import "./../css/icon.css"

class ProfileComponent extends Component{
    render() {
        return (
            <div>
                <div>
                    <Img src={data.foto} style={{width:'200px', height:'270px', borderRadius:'10px'}} />
                </div>
                <div style={{marginTop:'10px'}}>
                    <label className='FontWord'>{data.name} {data.surname}</label>
                    <div>
                        <label>{data.login}</label>
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <p className='Description'>{data.shortDescription}</p>
                </div>

                <hr style={{marginBottom:'20px'}}/>

                <ContactComponent/>
            </div>
        );
    }
}

export default ProfileComponent;