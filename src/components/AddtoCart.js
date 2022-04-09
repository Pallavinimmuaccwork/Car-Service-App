import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const AddtoCart = () => {
  const cartdata = useSelector(state => {
    return state.cart.AddtoCart
  })
  // console.log(cartdata);

  let sum = 0;

  cartdata.forEach(ele => {
    sum = sum + ele.price
  });

  console.log(sum)

  return (
    <div>
      <Row>
        <Col>
          {cartdata && cartdata.map((ele, inx) => {
            return (
              <Card className="p-5 m-4" key={inx}>
                <h2>Date:--{ele.Date}</h2>
                <h2>Time:--{ele.Time}</h2>
                <h2>Type:--{ele.Type}</h2>
                <h2>car modle:--{ele.carmodle}</h2>
                <h2>car name:--{ele.carname}</h2>
                <h2>car number:--{ele.carnumber}</h2>
                <h2>service price:--{ele.price}</h2>
              </Card>
            )
          })

          }

        </Col>
        <Col>
          <Card className="m-4 p-5">
            <h2>Total Price</h2>
            <h3>Sub Total : Rs {sum}/-</h3>
            <h3> Gst(18%): Rs {sum * 0.18}/-</h3>
            <h3>  Total:Rs {sum * 1.18}/-</h3>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AddtoCart