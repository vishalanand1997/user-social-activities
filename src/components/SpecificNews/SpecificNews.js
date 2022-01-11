import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import news from "../../news.json";
import { Row, Col, Card, CardBody } from 'reactstrap';
import { BsFillPersonFill, BsCalendarEvent } from "react-icons/bs";
import Nav from '../Nav/Nav';
export default function SpecificNews() {
    const parms = useParams()
    const [specificNews, setSpecificNews] = useState([])
    useEffect(() => {
        setSpecificNews(news.filter((items, index) => items.id == parms?.id))
    }, [])
    return (
        <div>
		<Nav />
            <Row className="m-0 p-0">
                <Col md="12" sm="12">
                    {specificNews?.map((item, index) => (
                        <Card key={item.id} className="card-posts">
                            <CardBody>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <div className="m-0 d-flex justify-content-between">
                                    <div>
                                        <BsCalendarEvent size={18} />
                                        <span style={{ marginLeft: "5px" }}>11 Jan 2022</span>
                                    </div>
                                    <div>
                                        <BsFillPersonFill size={18} />
                                        <span style={{ marginLeft: "5px" }}>Jonas</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
