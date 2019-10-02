import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(colum => (
            <th key={colum.label}>{colum.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
