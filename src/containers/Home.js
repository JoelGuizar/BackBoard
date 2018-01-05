import React, {Component} from 'react';

export default class Home extends Components {
  constructor(props){
    super(props);
    this.state = {
      home:'home'
    }
  }

  render(){
    return(
      <div>
        Home
      </div>
    )
  }
}
