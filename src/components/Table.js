import React, { useState, useEffect } from "react";
import "./compStyles.css";

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
    
    <div className="container-fluid ">
      <div className="row titles">
        <div className="col-md-3"> UserId</div>
        <div className="col-md-3"> Id</div>
        <div className="col-md-3"> Title</div>
        <div className="col-md-3"> Body</div>
      </div>
          {json.map((s) => (
            <div className="row content" key={"user:"+s.id}>
              <div className="col-md-3" > {s.userId}</div>
              <div className="col-md-3" > {s.id}</div>
              <div className="col-md-3" > {s.title}</div>
              <div className="col-md-3" > {s.body}</div>
            </div>
          ))}
    </div>
  ) : (
    false
  );
}
