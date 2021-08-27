import React, { useState , Text ,View} from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  UncontrolledCarousel, 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row,

} from 'reactstrap';
import { render } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';
import Header from '../components/Header';
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';
function T_shirt(props){
    
    
    return (
        
            <div >
                <div >
                   <Header />
                </div>

                <div style={{width:"100%",marginTop:50,marginBottom:50}}>
                    <p>T-Shirt</p>
                </div>
                
                
                <div>
                    <ShoppingList/>
                </div> 
                    
              

             
               
               
            </div>

    );
}


export default T_shirt;