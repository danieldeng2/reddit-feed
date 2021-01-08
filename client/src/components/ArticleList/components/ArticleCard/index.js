import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function ArticleCard() {
	return (
		<Row className="mt-3">
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
  							</Card.Text>
						<Card.Link href="#">Link</Card.Link>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default ArticleCard;
