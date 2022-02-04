import React, { Component } from "react";

class Like extends Component {
  render() {
    let dynamicClass = this.props.liked
      ? "bi bi-heart-fill m-2"
      : "bi bi-heart m-2";
    return <i className={dynamicClass} onClick={this.props.onClick}></i>;
  }
}

export default Like;
