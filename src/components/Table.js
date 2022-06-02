import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Table(prop) {
  const json = prop.data;

  // useEffect(() => {
  //   const chunkSize = 10;
  //   const arr = prop.data;
  //   const groups = arr.map((e, i) => { 
  //       return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
  //   }).filter(e => { return e; });
  //   console.log({arr, groups})
  // }, []);

  

  return prop.show ? (
    
    <div className="container">
      <div className="row">
        <div className="col-md-3"> userId</div>
        <div className="col-md-3"> id</div>
        <div className="col-md-3"> title</div>
        <div className="col-md-3"> body</div>
      </div>
      <div className="row">
        <span>
          {json.map((s) => (
            <div className="row" key={"user:"+s.id}>
              <div className="col-md-3" > {s.userId}</div>
              <div className="col-md-3" > {s.id}</div>
              <div className="col-md-3" > {s.title}</div>
              <div className="col-md-3" > {s.body}</div>
            </div>
          ))}
        </span>
      </div>
    </div>
  ) : (
    false
  );
}
