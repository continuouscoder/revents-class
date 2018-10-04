import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm'

{/* Simulating some events */}
const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
  constructor(props){
        {/* SETTING STATE:
            The constructor and super are not explained, but docs say to use them.
            I'll treat it as required boilerplate. 

            this.state is setting state on changable events like what appears on the dashboard.
            isOpen will be a boolean to set the creation form as open or closed.
        */}
    super(props)

    this.state = {                
      events: eventsDashboard,
      visibility: false               
    }

    this.handleFormVisibility = this.handleFormVisibility.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }

  handleFormVisibility(){     {/* This function can attach to the button to display the form */}
    this.setState({
      visibility:true
    })
  }
  handleFormCancel(){
    this.setState({
      visibility: false
    })
  }

  render() {
    return (
      <Grid>
          <Grid.Column width = {10}>  {/* Semantic UI uses a grid width of 16, so 10 on this column.... */}
            {/* <EventList/> : original mockup */}
            <EventList events={this.state.events} />  {/* Orig. code: EventList events={eventsDashboard} /> By pulling in events and defining them here, we can pass the values of the obj. to the EventsList */}
          </Grid.Column>
          <Grid.Column width = {6}>    {/** ...and 6 here completes the 16 width */}
            <Button positive content='Create Event' onClick={this.handleFormVisibility}/> {/* If you do a onClick={this.handleFormVisbility()} every time the form re-renders, then the page would re-render - we want to wait for it to get the click to oepn it */}
            {this.state.visibility && 
            <EventForm handleFormCancel = {this.handleFormCancel} />}     {/* This is the way we set the state to control the visibility of the form */}
          </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard