import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui';
import moment from 'moment';


class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {openEvent: false};
    this.onDelete = this.onDelete.bind(this)
  }

  onDelete(e) {
    let updatedList = this.props.list
    updatedList.forEach((event, i) => {
      if (updatedList[i].id === this.props.index) {
        updatedList.splice(i, 1)
      }
    })
  this.props.deleteEvent(this.props.list, this.props.index)
  }
  
  render() {
    return (
      <div id='eachevent'>
      <Card >
        <CardHeader
          className="card-top"
          title={this.props.event.title}
          subtitle={this.props.event.location}
          avatar="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
        />
         <CardMedia
          overlay={<CardTitle title={this.props.event.location}
          subtitle={moment(this.props.event.date)
           .format('MMMM DD, YYYY')} />}
        >
        <img src={this.props.event.image} />
        </CardMedia>
        <CardTitle className="description-card" title={this.props.event.title} subtitle={this.props.event.category} />
        <CardText className="description-card">
           { this.props.event.description }
        </CardText>
        <CardActions className="actions">
           <FlatButton className="btn" label="Would Love To Go!" onClick={() => this.props.handleEventClick(this.props.event)}/>
           <FlatButton className="btn" label="I'm Gonna Pass for Now" />
        </CardActions>
      </Card>
      </div>
      );
    }
}

export {EventItem};
