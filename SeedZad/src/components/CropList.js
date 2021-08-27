import React, { Component,useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from '../firebase/firebase';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row,ListGroup,
    Modal, ModalHeader, ModalBody, ModalFooter, Col 
  } from 'reactstrap';



export default function ShoppingList(props){
  const [itemList,setitemList] = useState([]);
  const [num,setnum] = useState(0);
    const classes = useStyles();
    const  bestseller = ()=>{
      if(num == 0){
      const userRef = firebase.firestore().collection("Cloth").where("Collection","==","Crop").get().then(function(querySnapshot) {
        let a = [] 
        querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              
              a.push(doc.data())
              setitemList(a)

          });
          console.log(itemList)
          setnum(1);
          console.log(num)
          setTimeout(function(){setnum (2)},10);
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      }
      // .then(function(docRef){
      //     docRef.forEach(function(doc){
      //         setitemList([...itemList,doc])
      //         console.log(doc)
      //     })
      // })
          
        
  }
    bestseller()
     
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

      const currencies = [
        {
          value: 'S',
          label: 'S',
        },
        {
          value: 'M',
          label: 'M',
        },
        {
          value: 'L',
          label: 'L',
        },
        {
          value: 'XL',
          label: 'XL',
        },
      ];

      const [currency, setCurrency] = React.useState('EUR');
      const handleChange = (event) => {
        setCurrency(event.target.value);
      };
  
        return (
          
            <div className={classes.root}>
        <ListGroup style={{height:500,width:"80%",marginLeft:145}}>
            <Row sm="5" style={{alignItems:'center'}} >
                        { num==2 ?  itemList.map(listitem => (
                <ButtonBase onClick={toggle}
                focusRipple
                key={""}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: 180,
                }}
                >
            
            <Card style={{alignItems:'center',height:370,width:250,marginBottom:10,borderWidth:1,borderColor:'secondary'}}>
                <CardImg top width="100%" style={{height:250,width:224,marginTop:10}} src={listitem.image} alt="Card image cap" /> 
                <CardBody>
                <CardTitle style={{fontSize:25}}>{listitem.name}</CardTitle>
                <CardText>{listitem.price}</CardText>
                </CardBody>

                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} style={{backgroundColor:'red'}}>รายละเอียดสินค้า</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <img  style={{height:250,width:224,marginTop:10}} src={listitem.image} alt="Card image cap" /> 
                            </Col>
                            <Col>

                                <p style={{fontSize:25}}>{listitem.name}</p>
                                <p>{listitem.price}</p>
                                <TextField
                                id="filled-select-currency"
                                select
                                label="Select Size"
                                value={currency}
                                onChange={handleChange}
                                helperText="Please select your size"
                                variant="filled"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                                    <br/>
                                <Row>
                                    <Col sm="3">
                                        <p>จำนวน</p>
                                    </Col>
                                    
                                    <Col>
                                        <TextField style={{width:40}}  />
                                    </Col>
                                    
                                </Row>    
                                
                                    
                                
                            </Col>
                        </Row>
                        
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>เพิ่มในตะกร้า</Button>{' '}
                    </ModalFooter>
                    </Modal>
                </Card>
            
        </ButtonBase>)):null}
     </Row>
     </ListGroup>
    </div>
   
  );
    }
  


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 385,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
    }));