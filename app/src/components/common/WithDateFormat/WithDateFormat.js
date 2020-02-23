import { Component } from "react";
class WithDateFormat extends Component {
  convert = initialDate => {
    const date = new Date(initialDate);
    const dd = date.getDate() < 10  ? "0" + date.getDate(): date.getDate();
    const mm = date.getMonth()  < 10  ? `0${date.getMonth()+1}`  : date.getMonth() + 1 ;
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };
  render() {
    return this.props.render(this.convert);
  }
}

export default WithDateFormat;
