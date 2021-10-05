import React, { Component } from "react";
import Bodycomponent from "./Bodycomponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Bodycomponent />
        <FooterComponent />
      </div>
    );
  }
}
