import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";

export default class Bodycomponent extends Component {
  render() {
    return (
      <div className="container mb-5">
        <BannerComponent />
        <div className="row mt-5">
          <ItemComponent />
        </div>
      </div>
    );
  }
}
