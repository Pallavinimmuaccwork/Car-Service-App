import { useEffect, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCartfunc } from "../redux/action/action";

const FormPage = ({ Type }) => {
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch()
    const carName = useRef();
    const carModle = useRef();
    const carNumber = useRef();
    const date = useRef();
    const time = useRef();
    const [price, setprice] = useState(0);
    const cartdata = useSelector(state => {
        return state.cart.AddtoCart
    })
    const Priceset = () => {
        if (Type === "oneType") { setprice(700) }
        if (Type === "Silver") { setprice(1000) }
        if (Type === "Gold") { setprice(1500) }
        if (Type === "Platinum") { setprice(2500) }
    }
    useEffect(() => {
        Priceset()
    }, []);


    const handleSubmit = (event) => {

        const form = event.currentTarget;
        const cardata = {
            carname: carName.current.value,
            carmodle: carModle.current.value,
            carnumber: carNumber.current.value,
            Date: date.current.value,
            Time: time.current.value,
            Type: Type,
            price: price
        }



        event.preventDefault();
        if (form.checkValidity() === true) {
            console.log(cardata)
            cartdata.push(cardata)
            dispatch(AddtoCartfunc(cartdata))
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Car name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Car Name"
                    defaultValue="Maruti"
                    ref={carName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Car Model</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Car Model"
                    defaultValue="shift"
                    ref={carModle}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Car Number</Form.Label>
                <Form.Control type="text" placeholder="Car Number" required ref={carNumber} />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid car number.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="State" required ref={date} />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Date.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Zip" required ref={time} />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Time.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>

            <Button type="submit">Add to Cart</Button>
        </Form>
    );
}

export default FormPage