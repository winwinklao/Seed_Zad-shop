import React, { Component } from "react";


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row,ListGroup,
  
  } from 'reactstrap';

export default class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listitems: [
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อดำ', price: 399},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:499},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},

                
            ]
    }
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

}
    

    render(){
        return (
    <Container>
        <Row>
        <div>
      <ListGroup style={{height:500,width:"100%",marginLeft:0,}}>
          
            {this.state.listitems.map(listitem => (
                 <div>  
                    <div  style={{height:300,width:600,marginLeft:50,borderWidth:10,borderColor:'secondary',}}>     
                        <div>  
                            <img top width="100%" style={{height:100,width:100,marginTop:10}} src={listitem.image} alt="Card image cap" />
                            <span style={{margin:10,fontSize:15,fontWeight:'bold'}}>{listitem.name}</span> <br/>
                        </div>
                        <div>
                            <Button color="primary">ชำระเงิน</Button>
                        </div>  
                    </div>  


                   
                </div>
               
        ))
        }
       
                  
               
      </ListGroup>
      </div>

      <div style={{height:500,width:300,marginLeft:0,backgroundColor:'gray'}}>
        <Button style={{backgroundColor:'black'}}>ชำระเงิน</Button>
        <p>สรุปคำสั่งซื้อ</p>

        <div style={{height:400,width:280,margin:10,backgroundColor:'green'}}>
            <p>สรุปคำสั่งซื้อsda</p>
            <p>{} ชิ้น</p>
            <p>รวมสินค้าทั้งหมด</p>
            <p>การจัดส่ง</p>
            <p>รวม</p>
        </div>
      </div>

      </Row>
    </Container>
  );
    }
  
}

