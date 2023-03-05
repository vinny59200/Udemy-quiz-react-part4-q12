import React from "react";

class Huggable extends React.Component {
  hug(id) {
    console.log("hugging " + id);
  }
  render() {
    let name = "kitten";
    let button = <button onClick={(e) => this.hug(name, e)}>Hug Button</button>;
    return button;
  }
}

export default Huggable
