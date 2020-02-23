import {Component} from "react";

class MinutesToHours extends Component {
  convert = seconds =>{
      return seconds ? new Date(parseInt(seconds) * 1000).toISOString().substr(11, 8) : null;
  } 
  render() {
    return this.props.render(this.convert);
  }
}

export default MinutesToHours;
