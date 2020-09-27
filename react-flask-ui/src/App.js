import React from 'react';
import axios from 'axios';
import NavigationSection from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import TweetList from './components/TopicTable';

function App() {
  let topic = "shellhacks"
  
  return (
    <div className="App">
      <NavigationSection />
      <Form inline>
        <FormControl id="search" type="text" placeholder="Topic" className="mr-sm-2" />
        <Button variant="outline-info" onClick={handleQuery()}>Search</Button>
      </Form>
      <div style={{ width: '100%', alignItems: "center" }}>
        <h2>Our featured tweets for topic {topic}</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tweet Content</th>
            </tr>
          </thead>
          <tbody>
            <TweetList topic={topic} />
          </tbody>
        </Table>

      </div>

    </div>
  );
}

function handleQuery() {
  console.log('clicked');
  const tweets = axios({
    method: 'post',
    url: '127.0.0.1:5000/topic-keywords',
    data: {
      topic: 'religion'
    }
  }).then((response) => {
    console.log(response);
  });
  return tweets;
}

export default App;
