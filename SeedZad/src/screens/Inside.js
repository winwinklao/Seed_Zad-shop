import React, { useState ,Component} from "react";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row,ListGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Button,
    Col,ButtonDropdown,UncontrolledButtonDropdown
  } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Header from '../components/Header';



export default class Cart extends Component{
    constructor(props){
        super(props);
            this.state={
                listitems: [
                    {image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75b7368c-8873-4662-9f89-157bd2cfb97f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-1-SS9rJG.jpg', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/488882ff50ff45c986f1ab7500b3a779_9366/Adapt_GC8606_21_model.jpg', image2:'https://assets.adidas.com/images/w_600,f_auto,q_auto/35f0023d045546e2a9b9ab7500b3d67c_9366/Adapt_GC8606.jpg',name: 'เสื้อแจ็คเก็ต ADAPT', price: 1900},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อดำ', price: 399},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:499},
     
    
                    
                ],
            }
    }



    render(){
        return(
            <div>
                <div>
                    <Header />
                </div>

                <Row style={{marginTop:40}}> 
                    <Col md="1" />
                    <Col md="7">
                        <Row md ="2">
                            <div className="text-left" style={{backgroundColor:'green'}}>
                                <img style={{height:500,width:500}} src={this.state.listitems[1].image} /> 
                            </div>
                            <div>
                                <img style={{height:500,width:500}} src={this.state.listitems[1].image2} />
                            </div>
                        </Row>
                      
                    </Col>
                    <Col >
                        <div className="text-left" style={{backgroundColor:'red',marginLeft:20}}>
                            <p>หมวดหมู่</p>
                            <h1  style={{marginLeft:0,fontSize:36,fontWeight:500,}}>{this.state.listitems[1].name}</h1> 
                            <p style={{marginLeft:0,fontSize:20,fontWeight:700,}}>฿{this.state.listitems[1].price}</p>
                            <p style={{marginLeft:0,fontSize:20,fontWeight:700,}}>เลือกขนาด</p>

                            <div className="text-left " style={{marginTop:80}}>
                              <Link to = "/CartScreen"><Button style={{height:65,width:"70%",backgroundColor:'black',borderRadius:30}} >ชำระเงิน</Button></Link> 
                            </div>

                        </div>

                        
                    </Col>
                    
                </Row>
                


            </div>
        );
    }
}
