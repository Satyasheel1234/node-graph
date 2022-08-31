import React  from "react";
import Record from "../db.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Graphdetails from "./Graphdetails";

function GraphList() {
  const [query, setQuery] = useState("");
  // const data = "this is data";

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/graphdetails`;
    navigate(path);
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
              
              <tr key={i}>
                <td onClick={routeChange}>{item.name}</td>
                <td onClick={routeChange}>{item.id} </td>
                {/* <Graphdetails data={item}/> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GraphList;


