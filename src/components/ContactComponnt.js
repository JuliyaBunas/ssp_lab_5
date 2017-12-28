import React, { Component } from "react";
import Icon from "./iconComponent";
import data from "E:/react/lab4/src/json/data";
import  "./../css/icon.css"

class Contact extends Component{
    render() {
        return (
            <div>
                <table>
                    <tr>
                       <td>
                           <Icon icon={"fa fa-map-marker"} />
                       </td>
                        <td>
                            <label >{data.location}</label>
                        </td>
                    </tr>
                    <tr>
                       <td>
                           <Icon icon={"fa fa-facebook-square"}/>
                       </td>
                        <td>
                            <lable class="FontWord">{data.socsite}</lable>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Icon icon={"fa fa-envelope-o"}/>
                        </td>
                        <td>
                            <a href={data.email}>{data.email}</a>
                        </td>
                    </tr>
                    <tr>
                       <td>
                           <Icon icon={"fa fa-link"}/>
                       </td>
                        <td>
                            <a href={data.link}>{data.link}</a>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default Contact;