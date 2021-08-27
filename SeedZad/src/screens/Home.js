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
  CardTitle, CardSubtitle, Button, Container, Row

} from 'reactstrap';

import FlatList from 'flatlist-react';
import Slidebar from '../components/Slidebar';
import { Link } from 'react-router-dom';
import ShoppingList from '../components/ShoppingList';
import Header from '../components/Header';
import firebase from '../firebase/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';

function Home(props){
    const email = useSelector(selectEmail);
    const dispatch = useDispatch();

    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);

   

    
     

    return (
      
            <div >
               <div >
                   <Header />
                   
                </div>
                    

                <div style={{backgroundColor:'black'}}>
                <Slidebar  />
                </div>

                <div style={{margin:50}}>
                <img  style={{height:150,width:1540}} src='https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/127227738_1522014834676217_5743551770462047414_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_eui2=AeHCps8O4dSgoIhjsGhlaU1ATeuIH_gCRHhN64gf-AJEeNhMLHbTYQHjDkWjsurkvT5BEBUSsNHzt9TYtUe9khfu&_nc_ohc=OgGlg4rpOqUAX8d18lS&_nc_ht=scontent.fbkk11-1.fna&oh=875626330dad3bf16c33495ca3132a85&oe=5FE99B86' />
                    
                    

                </div>
                

                <div>
                    <ShoppingList/>
                </div>
                
                     

            
                   
                
            </div>
             


    );
}


export default Home;