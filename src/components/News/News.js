import React, { Fragment, useEffect, useState } from 'react'
import news from "../../news.json"
import { Card, CardBody } from 'reactstrap';
import ReactPaginate from "react-paginate";
import { Row, Col } from 'reactstrap';
export default function News() {
    console.log("news", news);
    const [newsList, setNewsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + 10;
        setNewsList(news.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(news.length / 10));
    }, [itemOffset])

    const Previous = () => {
        return (
            <Fragment>
                <span className="align-middle d-none d-md-inline-block">
                    Prev
                </span>
            </Fragment>
        );
    };
    const Next = () => {
        return (
            <Fragment>
                <span className="align-middle d-none d-md-inline-block">
                    Next
                </span>
            </Fragment>
        );
    };
    const handlePagination = (page) => {
        console.log("Page0", page);
        setCurrentPage(page.selected);
        const newOffset = (page.selected * 10) % news.length;
		setItemOffset(newOffset)
		setCurrentPage(page.selected)

    };

    // ** Custom Pagination Component
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel={<Previous size={15} />}
            nextLabel={<Next size={15} />}
            forcePage={currentPage}
            onPageChange={(page) => handlePagination(page)}
            pageCount={pageCount}
            breakLabel={"..."}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName={"active"}
            pageClassName={"page-item"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next"}
            previousClassName={"page-item prev"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
                "pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"
            }
        />
    );

    return (
        <div>
            <Row>
                <Col md="12" sm="12">
                    {newsList?.map((item, index) => (
                        <Card key={item.id}>
                            <CardBody>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                            </CardBody>
                        </Card>
                    ))}
                    <CustomPagination />
                </Col>
            </Row>

        </div>
    )
}
