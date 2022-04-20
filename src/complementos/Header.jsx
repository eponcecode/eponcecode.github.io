import React from "react";
import { Container, Image } from "react-bootstrap";
import NavbarEN from "./NavbarEN";
import NavbarES from "./NavbarES";
import TitleBar from "./TitleBar";
export default class Header extends React.Component{
    state=this.props.dataFromParent;
    render(){
    return(<>
    <TitleBar dataFromParent = {this.state}/>
    <Container align='center'>
    <Image src="img/header.png" fluid style={{border:'6px solid rgba(68, 68, 68)'}}/>
    </Container>
    {this.state.language==='EN'? <NavbarEN />:<NavbarES />}
    </>)
    }
}