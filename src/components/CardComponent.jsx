import { Card, Button, Container, Row, Col } from 'react-bootstrap'

function CardComponent() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Popular Courses</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Learn HTML, CSS, JavaScript, and React from scratch.
              </Card.Text>
              <Button variant="primary">Enroll</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Data Science</Card.Title>
              <Card.Text>
                Master Python, ML, and data analysis tools.
              </Card.Text>
              <Button variant="primary">Enroll</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>AI & ML</Card.Title>
              <Card.Text>
                Build intelligent systems with real-world projects.
              </Card.Text>
              <Button variant="primary">Enroll</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardComponent
