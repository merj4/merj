import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

  // This component controls rendering one event based on its info from the database

  // I think this will then get passed into our eventsList so multiple events can be rendered on that view

  // Let's try and get some dummy data from the database setup so we can use it here?

    // The info we need from the database are event name, place, date, number of people attending (do we still have that in our DB?), the latest message(s) from the event chat and the most recent 1-2 images from the chat.

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this)
    return (
      <Card>
        <CardHeader
          title={this.props.event.title}
          subtitle={this.props.event.location}
          avatar="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        />
         <CardMedia
          overlay={<CardTitle title={this.props.event.location} 
          subtitle={this.props.event.date} />}
        >
          <img src={this.props.event.image} />
          </CardMedia>
         <CardTitle title={this.props.event.title} subtitle={this.props.event.category} />
         <CardText>
           {this.props.event.description}
         </CardText>
           <CardActions>
             <FlatButton label="Would Love To Go!" />
             <FlatButton label="I'm Gonna Pass for Now" />
           </CardActions>
         </Card>
      );
    }
}

export {EventItem};
