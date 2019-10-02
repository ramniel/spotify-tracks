import React, { Component } from "react";
import { objectByString } from "../utils/objByStr";

class TableBody extends Component {
  state = {};

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={column.label}>{objectByString(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
