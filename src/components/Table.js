import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Table() {
  // useEffect( () => {
  //   const getConsulta = async () =>{
  //   console.log("pep");

  //     try {

  //       let formData = new FormData();
  //       var consulta = document.getElementById("consulta").value;
  //       formData.append("consulta", consulta);
  //       const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";

  //         let result = await axios({
  //           url,
  //           method: 'GET',
  //           dataType: 'json',
  //           ContentType: 'application/json',
  //           data: formData
  //         });
  //         console.log(result);
  //         console.log("pep");
  //     }
  //     catch (error) {
  //       console.log(error);

  //     }
  //   }
  // });
  useEffect(() => {
    const getConsulta = async () => {
      console.log("pep");
      try {
        let formData = new FormData();
        var consulta = document.getElementById("consulta").value;
        formData.append("consulta", consulta);
        const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";
        let result = await axios({
          url,
          method: "GET",
          dataType: "json",
          ContentType: "application/json",
          data: formData
        });
        console.log(result);
        console.log("pep");
      } catch (error) {
        console.log(error);
      }
    };

    getConsulta(); // run it, run it

    // return () => {
    //
    // };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"> userId</div>
          <div className="col-md-3"> id</div>
          <div className="col-md-3"> title</div>
          <div className="col-md-3"> body</div>
        </div>
      </div>
    </>
  );
}
