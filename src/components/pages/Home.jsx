import React, { useState } from 'react'
import Spreadsheet from "react-spreadsheet";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState([
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}],
    [{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}, {value: ""},{value: ""}]
   
  ]);
  return (
    // <div>
      
    //   <Spreadsheet data={data} onChange={setData} />
    // </div>
    <div className="spreadsheet-container">
    <Spreadsheet
      data={data}
      onChange={setData}
      cellRenderer={({ children }) => (
        <div className="spreadsheet-cell">
          {children}
        </div>
      )}
    />
  </div>
  )
};
