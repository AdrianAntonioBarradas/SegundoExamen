import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./styles.css";
import Photo from "./components/Photo";

export default function App() {
  const [json, setJson] = useState();
  const [table, showTable] = useState(0);
  const [photo, showPhoto] = useState(0);
  // prueba jsno
  const getConsulta = async (currentUrl) => {
    try {
      let formData = new FormData();
      const url = currentUrl;
      let result = await axios({
        url,
        method: "GET",
        dataType: "json",
        ContentType: "application/json",
        data: formData
      });
      console.log(result.data);
      setJson(result.data);

      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getTable = async () => {
    showPhoto(0);
    setJson(await getConsulta("https://jsonplaceholder.typicode.com/posts"));
    showTable(1);
  };

  const getPhotos = async () => {
    showTable(0);
    setJson(await getConsulta("https://jsonplaceholder.typicode.com/photos"));
    showPhoto(1);
  };

  return (
    <div className="App">
      <h1>Segundo Examen</h1>
      <h2>Barradas Cerna Adrián Antonio</h2>
      <button onClick={getTable}> Tabla</button>
      <button onClick={getPhotos}> Fotos</button>
      <Table show={table} data={json} />
      <Photo show={photo} data={json} />
    </div>
  );
}
