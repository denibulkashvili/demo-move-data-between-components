import React from "react";
import axios from "axios";
import Selector from "./Selector";
import Results from "./Results";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "cat",
      link: "https://purr.objects-us-west-1.dream.io/i/FuntM.jpg"
    };
    this.changePerson = this.changePerson.bind(this);
  }

  changePerson(newPerson) {
    this.setState({
      person: newPerson
    });
    let apiLink =
      newPerson == "cat"
        ? "https://aws.random.cat/meow"
        : "https://random.dog/woof.json";
    if (newPerson == "cat") {
      axios.get(apiLink).then(res => {
        this.setState({
          link: res.data.file
        });
      });
    } else {
      axios.get(apiLink).then(res => {
        this.setState({
          link: res.data.url
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Dog Person or Cat Person</h1>
        <h2>
          Moving data between React components / Using axios to access a public
          API
        </h2>
        <Selector onChange={this.changePerson} />
        <Results person={this.state.person} link={this.state.link} />
      </div>
    );
  }
}
