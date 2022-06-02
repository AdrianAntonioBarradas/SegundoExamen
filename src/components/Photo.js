import "./photo.css";


export default function Photo(prop) {
  const json = prop.data;

  return prop.show ? (
    <div className="container"> 
      <div className="row">
        <div className="col-md-3"> id</div>
        <div className="col-md-3"> title</div>
        <div className="col-md-3"> url</div>
        <div className="col-md-3"> thumbnailUrl</div>
      </div>
      <div className="row">
        <span>{json.map((s) => (
          <div className="row" key={"user:"+s.id}>
            <div className="col-md-3"> {s.id}</div>
            <div className="col-md-3"> {s.title}</div>
            <div className="col-md-3">
              <img className="photo-url" src={s.url} />
            </div>
            <div className="col-md-3">
              <img src={s.thumbnailUrl} /> 
            </div>
          </div>
        ))}</span>
      </div>
    </div>
  ) : (
    false
  );
}
