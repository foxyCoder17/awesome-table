import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <button onClick={this.props.onClick}>Add</button>
      </>
     );
  }
}
 
export default Button;