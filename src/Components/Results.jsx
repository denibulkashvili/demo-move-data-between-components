import React from "react";

export default class Results extends React.Component {
  render() {
    const catFacts = (
      <p>
        <ul>
          <li>Cat people are more intelligent than dog people.</li>
          <li>Cat people are more neurotic than dog people.</li>
          <li>Cat people are more open-minded than dog people.</li>
        </ul>
      </p>
    );
    const dogFacts = (
      <p>
        <ul>
          <li>There are more dog people than cat people.</li>
          <li>
            Dog people are far more sociable and outgoing than cat people.
          </li>
          <li>
            Dog people are more likely to live in rural areas than cat people.
          </li>
        </ul>
      </p>
    );
    let facts = this.props.person == "cat" ? catFacts : dogFacts;

    return (
      <div>
        <h3>What are the features of {this.props.person} people?</h3>
        <img
          src={this.props.link}
          alt="{this.props.person}-photo"
          width="400px"
        />
        {facts}
        <p>
          The facts are taken from the{" "}
          <a href="https://thoughtcatalog.com/lorenzo-jensen-iii/2015/06/17-basic-differences-between-dog-people-and-cat-people/">
            article
          </a>{" "}
          by Lorenzo Jensen III.
        </p>
      </div>
    );
  }
}
