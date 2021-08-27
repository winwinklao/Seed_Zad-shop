import React, { useState , Text ,View} from 'react';
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
  CardTitle, CardSubtitle, Button, Container, Row
  

} from 'reactstrap';
import firebase from '../firebase/firebase'
  
//const count = useSelector(selectEmail);
//const dispatch = useDispatch();
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom';
import {setisSignedIn,selectisSignedIn} from '../state/issign'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let email = useSelector(selectEmail);
   /* if(emails==''){
        if(localStorage.getItem('email') != '')
        email
    }*/
    const rememberMe = localStorage.getItem('email') ;
    const dispatch = useDispatch();
    
    if(email != rememberMe){
        email = localStorage.getItem('email')
    }
    //
    
    // const rememberMe = localStorage.getItem('email') ;
    // const email = rememberMe ? localStorage.getItem('email') : '';
  
    return(
                <div >
                    <Navbar style={{backgroundColor:'black'}} light expand="md">
                        <div style={{marginTop: 0}}>
                        <Link to = '/'><NavbarBrand  className='text-white'   > <img style={{height:70,width:200}} src='https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/127107869_1517669885110712_3854604231853691780_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_eui2=AeHQBFxYSbs70QXffcvbrsfoUGo2kQQAqKFQajaRBACooU8p8hRldOb_Chpw1PzdL9rt3om3WOUDs4OczWYJ8EW9&_nc_ohc=SiJ7EHgqxaEAX8bDyBJ&_nc_oc=AQkF1EZU512E2KuTxJzXgDHiG8hNAjy3FKf6Yk1VgVGJtNVLhMR7PDMUj_eFqv27X1E&_nc_ht=scontent.fbkk11-1.fna&oh=35993e35856038e11733a425a995308d&oe=5FE996C7' /></NavbarBrand></Link>
                        </div>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <div style={{width:190}} />

                          
                                  <Nav className="mr-auto" navbar >
                                    <div style={{width:450}}></div>
                                    <NavItem>
                                    <NavLink  className='text-white' href="/WomenListScreen">Women</NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink  className='text-white' href="MenListScreen">Men</NavLink>
                                    </NavItem>
                                    
                                 </Nav>
                            
                      
                
                        <div style={{marginRight: 25}}>
                        <NavbarText className="text-center" style={{width:190, marginRight: 30}} className='text-white'>{email}</NavbarText>
                        {email ?
                         <Link to = '/'><NavbarText className="text-center"   className='text-white' onClick = {()=>{firebase.auth().signOut() ;
                            window.location.reload(false);
                            dispatch(setEmail(""));
                            dispatch(setisSignedIn(false))
                            localStorage.setItem('email', "");
                            localStorage.setItem('isSignedIn', false);
                        }}> Logout </NavbarText></Link> 
                         : 
                        <Link to = '/LoginScreen'> <NavbarText  className='text-white' style={{}}>Login</NavbarText></Link>}
                        </div>
                        </Collapse>
                        <Link to = '/CartScreen'><img style={{height:40,width:40, marginRight: 10}} src="https://www.aksorn.com/assets/img/icon/icon-cart-white.png"  /></Link>
                    </Navbar>
                </div>
    );
}