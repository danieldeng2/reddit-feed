import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { decode } from "html-entities";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function ArticleCard(props) {
  const creationDate = new Date(props.time * 1000).toLocaleString();
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              {<ReactMarkdown  plugins={[gfm]} >{decode(props.title)}</ReactMarkdown>}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {`${creationDate} | ${props.score} Upvotes`}
            </Card.Subtitle>

            <div className="card-text">
              {<ReactMarkdown  plugins={[gfm]} >{decode(props.content)}</ReactMarkdown>}
            </div>

            <Card.Link href={props.link} target="_blank">
              Link
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ArticleCard;
