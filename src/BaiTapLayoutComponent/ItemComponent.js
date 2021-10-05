import React, { Component } from "react";

export default class ItemComponent extends Component {
  ItemList = [
    {
      id: 1,
      icon: "fa fa-layer-group",
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      id: 2,
      icon: "fa fa-cloud-download-alt",
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      id: 3,
      icon: "fa fa-newspaper",
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      id: 4,
      icon: " fa fab fa-bootstrap",
      title: "Feature boxes",
      desc: "We've created some custom feature boxes using Bootstrap icons!.",
    },
    {
      id: 5,
      icon: "fa fa-code",
      title: "Simple clean code",
      desc: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      id: 6,
      icon: "fa fa-cog",
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  render() {
    return (
      <>
        {this.ItemList.map((item) => (
          <div className="col-4 mt-3 mb-5" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.desc}</p>
                <i class={item.icon}></i>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
