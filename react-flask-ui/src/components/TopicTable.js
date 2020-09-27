import React from 'react';
import Button from 'react-bootstrap/Button';


function TweetList(props) {
    const topic = props.topic;
    const tweetList = handleQuery(topic)
    console.log(tweetList);
    const keys = Object.keys(tweetList);
    return (
        <div>


            <Button onClick={handleQuery}>Click</Button>

        </div>
    )
}

async function handleQuery() {
    console.log('clicked');
    const tweets = await fetch('http://127.0.0.1:5000/topic-keywords', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "topic": 'religion'
        }
    });
    return tweets.json();
}


export default TweetList;