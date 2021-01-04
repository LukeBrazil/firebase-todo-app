import React from "react";

export default function Task() {
  return (
    <>
      <tr>
        <th scope="row">Learn React</th>
        <td>1/1/221</td>
        <td>
        <span className="material-icons text-primary" style={{cursor: 'pointer'}}>done_outline</span>
        </td>
        <td>
          <span className="material-icons text-danger" style={{cursor: 'pointer'}}>delete</span>
        </td>
      </tr>
    </>
  );
}
