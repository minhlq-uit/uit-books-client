import React from 'react';
import './BookCategories.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

export default function BookCategories() {
    return (
        <div className='categories-container container-fluid'>
            <div className='categories-breadcrumb ms-5 mt-2'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href='/categories' className='text-capitalize'>
                        Văn học trong nước
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-capitalize'>Tiểu thuyết</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='categories-main-container m-5 mt-3'>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <div className='categories-nav'>
                                <h6 className='categories-nav-title p-3 mb-0 fw-bold rounded'>Danh Mục</h6>
                                <Nav variant='pills' className='categories-nav-main flex-column text-capitalize'>
                                    <Nav.Item>
                                        <Nav.Link eventKey='first' className='category-nav border'>Tiểu thuyết</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='second' className='category-nav border'>Truyện ngắn - Tản văn</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='third' className='category-nav border'>Thơ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='fourth' className='category-nav border'>Huyền bí</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='fifth' className='category-nav border'>Giả tưởng</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <h1>Hello 1</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <h1>Hello 2</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}