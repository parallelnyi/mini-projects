import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val, key)=>{
        if (searchTerm == ""){
          return val
        }else if(val.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <hr />
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
