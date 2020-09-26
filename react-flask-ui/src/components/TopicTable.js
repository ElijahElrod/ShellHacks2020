import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function interpretSentimentScore(score) {
    if (score >= -0.05 && score <= 0.05) {
        return "neutral";
    } else if (score >= 0.05 && score <= 0.5) {
        return "positive";
    } else if (score >= 0.5) {
        return "strongly positive";
    } else if (score <= -0.05 && score >= -0.5) {
        return "negative"
    } else {
        return "strongly negative"
    }
}

function separateSubtopics(subtopics) {
    return subtopics
}

function CardList(props) {
    const keys = Object.keys(props.topicDictionary);
    return (
        keys.map((key) => {
            const topic_name = props.topicDictionary[key]['topicName'];
            const subtopics = separateSubtopics(JSON.stringify(props.topicDictionary[key]['subtopics']));
            const conversation_size = props.topicDictionary[key]['conversationSize'];
            const sentiment_score = props.topicDictionary[key]['sentimentScore'];
            return (
                <Card style={{ width: '50%' }}>
                    <Card.Header>Featured Topic</Card.Header>
                    <Card.Body>
                        <Card.Title>{topic_name}</Card.Title>
                        <Card.Text>
                            The most recent healthy conversations are discussing {subtopics}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Current conversations: {conversation_size}</ListGroupItem>
                        <ListGroupItem>Healthy conversations on {topic_name} have a {interpretSentimentScore(sentiment_score)} sentiment across {conversation_size} conversations</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">See more data</Card.Link>
                    </Card.Body>
                </Card>
            )
        })

    )
}



export default CardList;