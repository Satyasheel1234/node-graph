import React from "react";
import Graph from "react-graph-vis";
import ReactDOM from "react-dom/client";
import "../../src/styles.css";
import { useParams } from "react-router-dom";
import Record from "../db.json";
import "../../src/network.css";

export default function Graphdetails() {
  const { id } = useParams();
  const GraphDetailsById = Record.filter(x => x.id == id);
  //  if(GraphDetailsById!= null)
  //   {
  const formattedEdges = [];
  GraphDetailsById[0].data.edges.forEach(x => {
    const obj = { from: x.source, to: x.target };
    formattedEdges.push(obj);
  });

  const formattedGraph = { nodes: GraphDetailsById[0].data.nodes, edges: formattedEdges };
  //}

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      console.log("events", event);
      var { nodes, edges } = event;
    }
  };

  return (
    <div>
      <Graph
        graph={formattedGraph}
        options={options}
        events={events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Graphdetails />);
