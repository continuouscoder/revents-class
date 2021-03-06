import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
}

class EventForm extends Component {
    state = {
        event: emptyEvent
    }
    componentDidMount(){
        if (this.props.selectedEvent !== null){
            console.log(this.props.selectedEvent)
            this.setState({
                event: this.props.selectedEvent
            })
        }
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();
        {/* Part of the component class is the reference (refs) which can be accessed like so: */}
        // console.log(this.state.event)   
        {/* Below we are taking the createEvent method made in the Eventdashboard (this.prop.createEvent)
        and we're passing this.state.event to it (new event) */}
        this.props.createEvent(this.state.event)   
    }
    onInputChange = (evt) => {
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value    
        this.setState({
            event: newEvent
        })
    }
    render() {
    const {event} = this.state;
    const {handleFormCancel} = this.props; {/* props pulls in parent, in this case EventDashboard handleFormCancel */}
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />   {/* ref is set here to title (part of this.refs) */}
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={handleFormCancel} >Cancel</Button>
              </Form>
            </Segment>
    )
  }
}
export default EventForm