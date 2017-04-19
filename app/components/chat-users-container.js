// let React = require('react');


// let MobileTearSheet = React.createClass({

//   propTypes: {
//     height: React.PropTypes.number
//   },

//   getDefaultProps() {
//     return {
//       height: 350
//     };
//   },

//   render() {

//     let styles = {
//       root: {
//         float: 'left',
//         marginBottom: 24,
//         marginRight: 24,
//         width: 360

//       },

//       container: {
//         border: 'solid 1px #d9d9d9',
//         height: this.props.height,
//         overflow: 'hidden'
//       }
//     };

//     return (
//       <div style={styles.root}>
//         <div style={styles.container}>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }

// });

// module.exports = MobileTearSheet;