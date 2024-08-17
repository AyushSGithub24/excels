import React, { useState } from 'react'
import Spreadsheet from "react-spreadsheet";

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
    <div>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  )
};
