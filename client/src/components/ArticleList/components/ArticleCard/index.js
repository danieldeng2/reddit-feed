import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function ArticleCard(props) {
	const creationDate = new Date(props.time * 1000).toLocaleString();
	return (
		<Row className="mt-3">
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{`${creationDate} | ${props.score} Upvotes`}
						</Card.Subtitle>
						<Card.Text>
							{props.content}
						</Card.Text>
						<Card.Link href={props.link}>Link</Card.Link>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default ArticleCard;
