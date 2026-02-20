import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

function CardComponent() {
  const { dispatch } = useContext(AppContext)

  const courses = [
    { title: 'Web Development', price: 200 },
    { title: 'Data Science', price: 300 },
    { title: 'AI & ML', price: 400 }
  ]

  return (
    <Container className="my-5">
      <Row>
        {courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>Price: ${course.price}</Card.Text>
                <Button
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: course })
                  }
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardComponent