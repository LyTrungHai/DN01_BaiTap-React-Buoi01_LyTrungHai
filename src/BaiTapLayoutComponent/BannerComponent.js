import React, { Component } from "react";

export default class BannerComponent extends Component {
  render() {
    return (
      <div className=" banner my-5  ">
        <h1>A Warm Welcome!</h1>
        <p>
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-primary">Call to action!</button>
      </div>
    );
  }
}
