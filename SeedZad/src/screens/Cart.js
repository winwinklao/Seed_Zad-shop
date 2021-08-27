import React, { useState ,Component } from "react";


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  Container, Row,ListGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Button,
    Col,ButtonDropdown,UncontrolledButtonDropdown
  } from 'reactstrap';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import firebase from '../firebase/firebase';
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart(){
         
       const [i,seti] = useState(0) 
       const [sum,setsum] = useState(0) 
       const [total,settotal] = useState(0) 
       const [itemlist,setitemlist] = useState([])
       const [piece,setpiece] = useState(0)
       const [price,setprice] = useState(0)
       const [name,setname] = useState("")
       const [sent,setsent] = useState(100)
       let email = useSelector(selectEmail);
       const [round,setround] = useState(0)
       email = localStorage.getItem('email')
        if(round== 0){
            setround(1)  
      firebase.firestore().collection("Shopping").where("email","==",email).get()
                            .then(function(querySnapshot){
                            let a = [];
                            let num = 0; 
                            let nums = 0;
                            let all = 0;
                            querySnapshot.forEach(function(doc){
                                a.push(doc.data())
                                num+= (doc.data().priece * doc.data().piece)
                                nums += doc.data().piece
                                
                                seti(i+1)
                                setpiece(nums)
                               
                                setsum(num)
                                setitemlist(a)

                            }
                            )
                            
                                }

                            )
                
                    
                
                          
        }
   
        return(
            <div>
                <div>
                    <Header />
                </div>
                
                

            <Row  className='justify-contents-top' style={{marginBottom:30}}>
            <Col md = '2'></Col>
            <Col md = '5' >
                <div  className="text-left " style={{margin:20}}>
                  <span  style={{fontSize:28,fontWeight:'bold'}}>ตะกร้าของคุณ</span> &nbsp;&nbsp;<span style={{fontSize:20,}}>{i}  รายการ</span>  
                </div>

                <ListGroup style={{}}>
                    {itemlist.map(listitem => (
                     <Col  className = "border-top border-lightgray"style={{borderColor:'red' }}>  
                        <Col className="text-left " style={{height:152,borderWidth:10,borderColor:'secondary',marginTop:20}}>     
                            <Row >
                                <Col sm="3">
                                    <img  top  style={{height:130,width:130}} src={listitem.image} alt="Card image cap" />
                                </Col>
                                
                                <Col sm="5">
                                    
                                    <h1  style={{marginLeft:-20,fontSize:18,fontWeight:'bold',}}>{listitem.name}</h1> 

                                    <Link style={{borderWidth:false}} component="button" variant="body2" onClick={() => {
                                         firebase.firestore().collection("Shopping").where("email","==",email).get()
                                         .then(function(querySnapshot){
                                           let a = false;
                                           querySnapshot.forEach(function(doc){
                                             let c = doc.data().idCloth
                                             console.log(c,listitem.idCloth)
                                             if(c == listitem.idCloth)
                                             {
                                               a = true;
                                               firebase.firestore().collection("Shopping").doc(doc.id).delete()
                                                
                                             }
                                           })
                                                   
                   
                                         })
                                         .catch(function(error){
                                           console.log(error);
                                         });
                                         setTimeout(function() {
                                            window.location.reload(false);
                           
                                       }, 500);
                                        
                                     }}>ลบ</Link>
                                    
                                </Col>
                                  
                                <Col className="text-right">
                &nbsp;&nbsp;&nbsp;  <div className="text-center">
                                    <p caret style={{backgroundColor:'lightgray',marginTop:-20, width:60}}>
                                     {listitem.piece} &nbsp;
                                    </p>
                                    </div>
                                </Col>
                                <Col >
                                <div >
                                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;฿ {listitem.priece}
                                    </div>
                                </Col>
                                

                             
                            </Row> 
                            
                           
                        </Col>  
    
    
                       
                    </Col>
                   
                    ))
                    }
           
                      
                   
                </ListGroup> 
               
            </Col>
                    
          <div  className="text-left " style={{height:330,width:350,marginLeft:10,marginTop:75,padding:10,backgroundColor:'#ebebeb',justifyItems:'top',alignItems:'top'}}>
            <Button style={{backgroundColor:'black',height:50,width:"100%"}}>ชำระเงิน</Button>
            <p style={{fontSize:20,fontWeight:'bold',marginTop:10}}>ค่าสินค้าทั้งหมด</p>
            
        <div  style={{height:200,width:330,backgroundColor:'white'}}>
                <div style={{marginLeft:10}}>
                    {}
                    <p  >{piece} ชิ้น</p>
    <p class="conclude-product" style={{}}>รวมสินค้าทั้งหมด &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {sum} ฿</p>
    
                <p class="conclude-product" style={{}}>การจัดส่ง &nbsp;&nbsp;{ sum == 0 ? 0:sent}  ฿</p>
                    <p class="conclude-product" style={{fontWeight:'bold'}}>รวม  &nbsp;&nbsp;&nbsp;{sum + (sum == 0 ? 0:sent)} ฿</p>
                </div>
            </div>
          </div>


            
            
    
          </Row>
          </div>

            
               
            
        );
    }


