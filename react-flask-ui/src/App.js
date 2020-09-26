import React from 'react';
import NavigationSection from './components/Navigation';
import CardList from './components/TopicTable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup } from 'react-bootstrap';

function App() {

  const mockData = {
    "religion": {
        topicName: "Religion",
        sentimentScore: .02,
        conversationSize: 100,
        subtopics: [
          "atheism",
          "buddhism"
        ],

    },
    "politics" : {
       topicName: "Politics",
        sentimentScore: 80,
        conversationSize: 74
    }
  }


  return (
  <div className="App">
    <NavigationSection/>
   
    <div style= {{width: '100%'}}>
      <CardGroup>
        <CardList topicDictionary={mockData} />
      </CardGroup>
      
    </div>
    
  </div>
  );
}

export default App;
