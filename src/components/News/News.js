import React from 'react'
import news from "../../news.json"
import { Card, CardBody } from 'reactstrap';
export default function News() {
    console.log("news", news);
    return (
        <div>
            {news?.map((item, index) => (
                <Card key={item.id}>
                    <CardBody>
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}
