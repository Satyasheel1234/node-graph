import React from "react";
import Record from "../db.json";
import { useNavigate, generatePath } from "react-router-dom";
import { useState } from "react";
import Graphdetails from "./Graphdetails";

function GraphList() {
  const [query, setQuery] = useState("");
  const [id, setId] = useState();
  let navigate = useNavigate();
  const routeChange = e => {
    id && navigate(generatePath("/graphdetails/:id", { id }));
  };

  return (
    <>
      Search Graph List: <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      <div>
        <h2>Graph List Data</h2>
        <table border="2">
          <tbody>
            <tr>
              <th>GraphName</th>
              <th>GraphID</th>
            </tr>
            {Record.filter(item => {
              if (query === "") {
                return item;
              } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                return item;
              }
            }).map((item, i) => (
              <tr
                key={i}
                onClick={e => {
                  setId(item.id);
                }}
              >
                <td onClick={routeChange}>{item.name}</td>
                <td onClick={routeChange}>{item.id} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GraphList;
