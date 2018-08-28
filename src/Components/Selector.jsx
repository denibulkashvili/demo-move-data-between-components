import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const person = e.target.value;
    this.props.onChange(person);
  }

  render() {
    return (
      <div>
        <h3>Are you a cat lover or a dog lover?</h3>
        <select onChange={this.handleChange}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
    );
  }
}
