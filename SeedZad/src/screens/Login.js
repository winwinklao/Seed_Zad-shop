import React, { useState , Text ,View,Component} from 'react';
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
import firebase from '../firebase/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { selectEmail, setEmail, } from '../state/emailState';
import {setisSignedIn,selectisSignedIn} from '../state/issign'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


 function Login  () {
    const email = useSelector(selectEmail);
    const isSignedIn = useSelector(selectisSignedIn);

     const dispatch = useDispatch();
     
    // The component's Local state.

    const history = useHistory();
    // Configure FirebaseUI.
    let uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google , Facebook , Etc as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
      }
    };
    
   /* setTimeout(function() {
        if(isSignedIn != localStorage.getItem('isSignedIn')) 
        dispatch(setisSignedIn(localStorage.getItem('isSignedIn')))

    }, 100);*/
      
    

    firebase.auth().onAuthStateChanged(
        (user) => {
                if(user == null){
                    dispatch(setisSignedIn(false))
                    localStorage.setItem('isSignedIn', false);
                    
                    
                }
                else {
                    dispatch(setisSignedIn(true))
                    localStorage.setItem('isSignedIn', true);
                    
                    
                    
                }
        if(isSignedIn){
            dispatch(setEmail(firebase.auth().currentUser.email))
            localStorage.setItem('email', email);
            
        }
        else
        {
            dispatch(setEmail(""))
            localStorage.setItem('email', "");
            
        

        }
        
    }
    );

    // Listen to the Firebase Auth state and set the local state.
    /*componentDidMount() {
          
       
      console.log(this.state.isSignedIn)
      
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    } 
    */
    
    
    
       
        
    

        
   if(!isSignedIn ) {return (

          <div style={{height:900,backgroundImage: 'url("https://images.hdqwalls.com/download/vaporwave-zl-1920x1080.jpg")'}} >
          <div style={{height:100}}></div>
          <div  className="container" style={{marginTop:100, backgroundColor:'#CAB9E1',borderRightColor:'black',borderRightWidth:3,padding: 50,width:350,borderRadius:30,}} /*style={{backgroundImage: 'url("https://images.hdqwalls.com/download/vaporwave-zl-1920x1080.jpg")'}}*/>
            <h1>Login</h1> 
            
  
             <p>Please sign-in:</p>
             <br />
             <br />
            
            <StyledFirebaseAuth uiConfig={{
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google , Facebook , Etc as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
        
      }
    }} firebaseAuth={firebase.auth()}/>
          </div>
       
       
        
           
        
      
      
      </div>
   )}
        else{
           
            setTimeout(function() {
                history.push('/');

            }, 1000);
              
        
            return(

        <div className="container" style={{backgroundColor:'white',width:500}}>
          <div style={{backgroundColor:'white',height:300,marginTop:250}}>
             <h1>FirebaseUI-React</h1>
          <h1> with Firebase Authentication</h1>
         
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <p>Welcome {firebase.auth().currentUser.email}! You are now signed-in!</p>
            <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
            {/* <div style={{marginTop:50}}>
                 <button onClick={() => {firebase.auth().signOut()
                dispatch(setisSignedIn(false))
                localStorage.setItem('isSignedIn', false);
                
                }}>Sign-out</button>
            </div> */}
          </div>
         
         
        </div>
     )
            }
    }
  
  export default Login;