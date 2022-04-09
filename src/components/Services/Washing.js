import React, { useState } from 'react'
import { Button, Card, Figure, Nav } from 'react-bootstrap'
import FormPage from "./Form";
const Washing = () => {
    const [Type, setType] = useState('oneType')
    const [Book, setBook] = useState(false);

    return (
        <>
            <div className="border m-5 p-5">

                <Card.Body className=''>

                    <h1 className="d-flex justify-content-center"><b>Washing</b></h1>

                    <h6 className='m-5'>
                        At Dhullo, we are reinventing the car wash and detailing concept.We use only 1.5 liters of water to make your car sparkle.We use different microfiber towels for glass and body to avoid swirls.We use separate brushes for the tyre rim and interior.
                    </h6>

                    <Nav variant="pills" defaultActiveKey="1" className="d-flex justify-content-evenly">

                        <Nav.Item><Nav.Link eventKey="1" className="buton" onClick={() => { setType("oneType") }}>One Time</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="2" className="buton" onClick={() => { setType("Silver") }}>Silver</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="3" className="buton" onClick={() => { setType("Gold") }}>Gold</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="4" className="buton" onClick={() => { setType("Platinum") }}>Platinum</Nav.Link></Nav.Item>

                    </Nav>
                    <br />
                    <br />

                    <Figure className="d-flex justify-content-center-between">
                        <Figure.Image
                            width={400}
                            height={400}
                            alt="171x180"
                            src="https://cdn.pixabay.com/photo/2014/11/06/19/39/auto-519826_960_720.jpg"
                        />
                        <h4 className="m-5">
                            <ul>
                                <li>Thrice a week outer wash</li>
                                <li>Twice a month basic interior cleaning</li>
                                <li>Starts from Rs. 699</li>
                            </ul>
                            <Button variant="danger" className='m-5' onClick={() => { setBook(!Book) }}>Book</Button>
                        </h4>
                    </Figure>

                    <br />


                </Card.Body>

                {Book &&
                    <Card className="bs p-5">
                        <h1>{Type}</h1>
                        <FormPage Type={Type} />
                    </Card>
                }

            </div>



        </>
    );
}

export default Washing
