import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavLink , Container, Row, Col} from 'reactstrap';

const SignUp = (props) => {
  return (
        <Row style={{marginTop: 100}}>
            <Col style={{backgroundColor: 'black'}}></Col>
            <Col sm = "5">
                <Form>
                    <header>
                        <h1 className='title'> CREATE ACCOUNT </h1>
                    </header>

            
                        <FormGroup>
                            <Label for="exampleEmail">User Name</Label>
                            <Input type="username" name="username" id="exampleUsername" placeholder="user name" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input 
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"/>
                        </FormGroup>
                

                
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Your E-mail" />
                        </FormGroup>
                    

                    
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Your password" />
                        </FormGroup>
                    

                
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Your password" />
                        </FormGroup>
                

                    <Button>SIGN UP</Button>
                </Form>
            </Col>
            <Col style={{backgroundColor: 'pink'}}></Col>
        </Row>

  );
}

export default SignUp;