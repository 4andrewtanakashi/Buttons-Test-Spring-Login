import React, {Component} from 'react';
import DataService from "../service/DataService";
import { withRouter } from "react-router-dom";
import {Popover, OverlayTrigger, ButtonToolbar} from "react-bootstrap";

import './css/Main.css';
import HistoricoIcon from "../img/tempo-restante.svg";
import InfoIcon from "../img/160px-Infobox_info_icon.svg.png";

import Accordion from "react-collapsy";
import "../../node_modules/react-collapsy/lib/index.css";

import Popup from "reactjs-popup";
import Content from "../component/Content"

class Main extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            credential: {
                headers: {
                    Authorization: ""
                }
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit() {

        let u = {
            "login": "Olavo",
            "nameComplete": "Olavo de Carvalho"
        }
        console.log( "Teste: ");
        console.log(u);
        DataService.test(u)
        .then(
            response => {
                
                console.log("Deu Certo: ");
                console.log(response.data);
                console.log(response.header);
                console.log(response.status);

                let data = {
                    login: response.data.login,
                    password: response.data.autho
                }

                DataService.login(data)
                    .then(
                        response => {
                            console.log("Deu Certo o login: ");
                            console.log(data);
                            console.log(response.headers.authorization);
                            console.log(response.status);

                            this.setState({
                                credential: {
                                    headers: {
                                        Authorization: response.headers.authorization
                                    }
                                }
                            })
                        }
                    )
                    .catch(
                        error => {
                            console.log("Falha de login: ");
                            console.log(data);
                        }
                    )
            }
        ).catch(
            err => {
                console.log("Não Deu Certo2"); 
                
            }
        )
    }

    onSubmit2() {
        console.log("authorization: " + this.state.credential.headers.Authorization);
        DataService.test2(this.state.credential)
        .then(
            response => {
                if (response.data === true) {
                    console.log("Está logado");
                }
                else
                    console.log("Não Deu Certo");
            }
        ).catch(
            err => {
                console.log("Não Está logado"); 
                
            }
        )
    }

    logout() {
        DataService.logout()
        .then(
            response => {
                
                console.log("Deslogou");
                this.setState({credential: {headers: {Authorization: ""}}})
            }
        ).catch(
            err => {
                console.log("Não Deslogou"); 
                
            }
        )
    }
    
    render() {

        return(

            <React.Fragment>
           <button className="btn btn-primary" 
                   style={{width: "24em", height:"24em"}}
                   onClick={_ => this.onSubmit()}>
                                                        Press</button>
            <br/>
            <button className="btn btn-secondary" 
                   style={{width: "24em", height:"24em"}}
                   onClick={_ => this.onSubmit2()}>
                                                        Press</button>

            <br/>
            <button className="btn btn-danger" 
                   style={{width: "24em", height:"24em"}}
                   onClick={_ => this.logout ()}>
                                                        Press</button>
        </React.Fragment>

        );

    }
}

export default withRouter(Main);