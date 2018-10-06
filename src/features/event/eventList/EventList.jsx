import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import EventListItem from './EventListItem';

 class EventList extends Component {
  render() {
    const {events, onEventEdit} = this.props; {/* this.props references the parent object being passed in. */}
    return (
      <div>
        <Container>
            {events.map((event) => (
                <EventListItem key={event.id} event={event} onEventEdit={onEventEdit}/>
             ))}
        </Container>
      </div>
    )
  }
}
export default EventList