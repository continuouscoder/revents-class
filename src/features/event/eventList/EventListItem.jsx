import React, { Component } from 'react'
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    const {event, onEventEdit} = this.props; {/* Design pattern to use properties of the obj */}
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image 
                    size="tiny" 
                    circular 
                    src={event.hostPhotoURL} />
                    <Item.Content>
                      <Item.Header as="a">{event.title}</Item.Header>
                      <Item.Description>
                      Hosted by {event.hostedBy}
                      <br/>
                        {event.description}
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> {event.date} |
                  <Icon name="marker" /> {event.venue}
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                    {/* adding event.attendees && is like saying "do we have attendees?
                  if no, it ignores adding empty attendees, if we have them, they are added." */}
                    {event.attendees && event.attendees.map((attendee) => (
                        <EventListAttendee key={attendee.id} attendee={attendee}/>
                    ))}
                </List>
              </Segment>
              <Segment clearing>
                <span>Description goes here</span>
                <Button onClick={onEventEdit(event)} as="a" color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}
export default EventListItem