import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CountryCard = ({ countryData }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <Card.Img src={countryData.flag} alt={countryData.name} className="img-fluid rounded card-flag" />
          </Col>
          <Col xs={8} md={9}>
            <Card.Title className="mb-1">{countryData.name}</Card.Title>
            <Card.Text className="text-muted">{countryData.region}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
