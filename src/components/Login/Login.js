import React from 'react'
import { FormGroup, Label, Button, Row, Col } from 'reactstrap'
import { LoginImg } from "../../assets/index"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom';
import "./Login.scoped.css"
export default function Login() {
    const history = useHistory();
    const selector = useSelector(state => state.LoginChanger.userList)

    const SignInSchema = Yup.object().shape({
        email: Yup.string().required('Email should not be empty'),
        password: Yup.string().min(6, 'Min. length of password is 6').max(12, 'Max. length of password is 12').required('Email should not be empty'),
    });

    const LoginTheAccount = (val) => {
        if (selector.some((values) => values.email === val.email && values.password === val.password)) {
            const specificDetail = selector.filter((detail) => detail.email === val.email)
            localStorage.setItem('userDetails', JSON.stringify(...specificDetail));
            localStorage.setItem('sessionToken', token())
            history.push("/news")
        } else {
            toast.error('Email or password is incorrect', { autoClose: 2000 })
        }
    }
    var rand = function () {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    var token = function () {
        return rand() + rand(); // to make it longer
    };
    return (
        <Row className='m-0 p-0' style={{ height: "100vh", backgroundColor: "#F8F8F8" }}>
            <Col md="8" lg="8" sm="12" className="m-auto image__section">
                <img src={LoginImg} alt="LoginImage" height={500} width={690} className="img-responsive center-block" />
            </Col>
            <Col md="4" lg="4" sm="12" style={{ backgroundColor: "white" }} className='d-flex align-items-center justify-content-center'>
                <div className='m-5'>
                    <h4>
                        Login to your account
                    </h4>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={SignInSchema}
                        onSubmit={values => {
                            LoginTheAccount(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormGroup className="mt-2 mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="me-sm-2"
                                        for="exampleEmail"
                                    >
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
                                <Button color="primary" block className='mt-2 ' type='submit'>
                                    Sign in
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <div className='text-center mt-2'>Have not Account? <Link to="/signUp"> SignUp</Link></div>
                </div>
            </Col>
        </Row>
    )
}
