import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Table(prop) {
  const json = prop.data;

  return prop.show ? (
    <div className="container">
      <div className="row">
        <div className="col-md-3"> userId</div>
        <div className="col-md-3"> id</div>
        <div className="col-md-3"> title</div>
        <div className="col-md-3"> body</div>
      </div>
      <div className="row">
        <ul>
          {json.map((s) => (
            <div className="row">
              <div className="col-md-3"> {s.userId}</div>
              <div className="col-md-3"> {s.id}</div>
              <div className="col-md-3"> {s.title}</div>
              <div className="col-md-3"> {s.body}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    false
  );
}
