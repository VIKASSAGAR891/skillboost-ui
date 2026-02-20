import { useContext, useMemo } from 'react'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Button, ListGroup } from 'react-bootstrap'

function Cart() {
  const { state, dispatch } = useContext(AppContext)

  const totalPrice = useMemo(() => {
    return state.cart.reduce((total, item) => total + item.price, 0)
  }, [state.cart])

  return (
    <>
      <Navbar />

      <Container className="my-5">
        <h2>Cart</h2>

        <ListGroup className="mb-3">
          {state.cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - ${item.price}
              <Button
                variant="danger"
                size="sm"
                className="float-end"
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: index })
                }
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h4>Total: ${totalPrice}</h4>

        <Button
          variant="warning"
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
        >
          Clear Cart
        </Button>
      </Container>

      <Footer />
    </>
  )
}

export default Cart