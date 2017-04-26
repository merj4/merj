import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui';
import moment from 'moment';


class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEvent: false
    };
  }

  render() {
    return (
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
           <FlatButton className="btn" label="Share" >
           <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&appId=642201689297999&width=59&height=20" width="59" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
           </FlatButton>

        </CardActions>
      </Card>
      );
    }
}

export {EventItem};
