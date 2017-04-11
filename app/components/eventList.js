import React from 'react';
import {EventItem} from './eventItem';



var EventList = (props) => {
  return (
    <table>
      <tbody>
        {props.events.map((event) =>
         <EventItem event={event} key={event.location}/>
         )}
      </tbody>
    </table>
  );
}


export {EventList};

// return (
//       <tr>
//         <td className="event-name">{this.props.event.title}</td>
//         <td>
//           <img src={this.props.event.image} />
//         </td>
//        <td className="event-description">{this.props.event.description}</td>
//       </tr>
//     )
//   }