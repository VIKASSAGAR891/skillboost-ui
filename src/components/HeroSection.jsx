import { Container, Button } from 'react-bootstrap'

function HeroSection() {
  return (
    <div className="hero-section text-center text-white">
      <Container>
        <h1>Learn Skills That Matter</h1>
        <p>Upgrade your career with industry-ready courses</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Container>
    </div>
  )
}

export default HeroSection
