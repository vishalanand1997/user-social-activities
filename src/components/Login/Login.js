import React from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { LoginImg } from "../../assets/index"
export default function Login() {
    return (
        <Row className='m-0 p-0' style={{ height: "100vh", backgroundColor: "#F8F8F8" }}>
            <Col md="8" lg="8" sm="12" className="m-auto d-flex justify-content-center">
                <img src={LoginImg} height={500} width={690} className="img-responsive center-block" />
            </Col>
            <Col md="4" lg="4" sm="12" style={{ backgroundColor: "white" }} className='d-flex align-items-center'>
                <div className='m-5'>
                    <h4>
                        Login to your account
                    </h4>
                    <Form inline>
                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                            <Label
                                className="me-sm-2"
                                for="exampleEmail"
                            >
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                            <Label
                                className="me-sm-2"
                                for="examplePassword"
                            >
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                        </FormGroup>
                        <Button color="primary" block className='mt-2 '>
                            Sign in
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}
