import React, { Component } from "react";
import Table from "./table";

class TracksTable extends Component {
  columns = [
    { path: "name", label: "Title" },
    { path: "artists[0].name", label: "Artist" },
    { path: "album.name", label: "Album" }
  ];

  render() {
    return <Table columns={this.columns} data={this.props.tracks} />;
  }
}

export default TracksTable;
