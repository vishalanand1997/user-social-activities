import React from 'react'
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { SignupImg } from "../../assets/index"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { SignUpFunc } from '../../redux/actions';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const SignInSchema = Yup.object().shape({
        fname: Yup.string().required('First name should not be empty'),
        lname: Yup.string().required('Last name should not be empty'),
        email: Yup.string().required('Email should not be empty'),
        password: Yup.string().required('Password is required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    const SignupHandle = (val) => {
        dispatch(SignUpFunc(val))
        toast.success("User account is created!")
        history.push('/')
    }
    return (
        <Row className='m-0 p-0' style={{ height: "100vh", backgroundColor: "#F8F8F8" }}>
            <Col md="6" lg="6" sm="12" style={{ backgroundColor: "white" }} className='d-flex align-items-center'>
                <div className='m-5'>
                    <h4>
                        Create an account
                    </h4>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            fname: "",
                            lname: "",
                            passwordConfirmation: ""
                        }}
                        validationSchema={SignInSchema}
                        onSubmit={values => {
                            SignupHandle(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                                for="exampleEmail"
                                            >
                                                First name
                                            </Label>
                                            <Field
                                                name="fname"
                                                placeholder="First name"
                                                className="form-control"
                                                style={errors.fname ? { border: '1px solid red' } : {}}
                                            />
                                            {errors.fname ? (<><small style={{ "color": "red" }}>{errors.fname}</small></>) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                            >
                                                Last name
                                            </Label>
                                            <Field
                                                name="lname"
                                                placeholder="Last name"
                                                className="form-control"
                                                style={errors.lname ? { border: '1px solid red' } : {}}
                                            />
                                            {errors.lname ? (<><small style={{ "color": "red" }}>{errors.lname}</small></>) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2">
                                        Email
                                    </Label>
                                    <Field
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        className="form-control"
                                        style={errors.email ? { border: '1px solid red' } : {}}
                                    />
                                    {errors.email ? (<><small style={{ "color": "red" }}>{errors.email}</small></>) : null}
                                </FormGroup>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                                for="examplePassword"
                                            >
                                                Password
                                            </Label>
                                            <Field
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                type="password"
                                                style={errors.password ? { border: '1px solid red' } : {}}
                                            />
                                            {errors.password ? (<><small style={{ "color": "red" }}>{errors.password}</small></>) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                                for="examplePassword"
                                            >
                                                Confirm Password
                                            </Label>
                                            <Field
                                                name="passwordConfirmation"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                type="password"
                                                style={errors.passwordConfirmation ? { border: '1px solid red' } : {}}
                                            />
                                            {errors.passwordConfirmation ? (<><small style={{ "color": "red" }}>{errors.passwordConfirmation}</small></>) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                    <Label for="exampleSelect">
                                        Interest
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Sports
                                        </option>
                                        <option>
                                            Entertainment
                                        </option>
                                        <option>
                                            Technology
                                        </option>
                                        <option>
                                            International
                                        </option>
                                        <option>
                                            National
                                        </option>
                                    </Input>
                                </FormGroup>
                                <Button color="primary" block className='mt-2 ' type='submit'>
                                    Sign Up
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <div className='text-left mt-2'>Have Account? <Link to="/"> Login</Link></div>
                </div>
            </Col>
            <Col md="6" lg="6" sm="12" className="m-auto image__section">
                <img src={SignupImg} alt="SignUpImage" height={500} width={690} className="img-responsive center-block" />
            </Col>
        </Row>
    )
}
