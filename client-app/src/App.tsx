import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response.data);
        setActivities(response.data);
      })
  }, [])

  const activityItems = activities.map((activity: any) => {
    return (
      <List.Item key={activity.id}>
        {activity.title}
      </List.Item>
    )
  })

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activityItems}
      </List>
    </div>
  );
}

export default App;
